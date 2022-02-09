import { Inject, Injectable } from '@nestjs/common';
import * as Jimp from 'jimp';
import { ConfigService } from '@nestjs/config';
import * as path from 'path';
import * as JPEG from 'jpeg-js';

@Injectable()
export class ImageService {
  private watermark: Jimp;
  private readonly thumbSizes: { small: number; large: number };

  constructor(
    @Inject(ConfigService)
    private readonly cfg: ConfigService,
  ) {
    Jimp.decoders['image/jpeg'] = (data: Buffer) =>
      JPEG.decode(data, { maxMemoryUsageInMB: 1024 });

    this.initWatermark(cfg.get<string>('APP_WATERMARK_PATH'));
    this.thumbSizes = {
      small: cfg.get<number>('APP_THUMB_SMALL_SIZE'),
      large: cfg.get<number>('APP_THUMB_LARGE_SIZE'),
    };
  }

  private async initWatermark(filePath: string) {
    this.watermark = await Jimp.read(filePath);
  }

  private resizeImage(image: Jimp, shorterEdgeSize: number): Jimp {
    const [w, h] =
      image.bitmap.width < image.bitmap.height
        ? [shorterEdgeSize, Jimp.AUTO]
        : [Jimp.AUTO, shorterEdgeSize];
    return image.resize(w, h);
  }

  private watermarkImage(image: Jimp): Jimp {
    return image.composite(this.watermark, 0, 0, {
      mode: Jimp.BLEND_SCREEN,
      opacityDest: 1,
      opacitySource: 0.8,
    });
  }

  private async processImage(
    fileName: string,
    suffix: string,
    shorterEdgeSize: number,
    opts: { watermark?: boolean; resize?: boolean } = {
      watermark: true,
      resize: true,
    },
  ): Promise<string> {
    const extension = path.extname(fileName).slice(1);
    const baseName = path.basename(fileName).replace('.' + extension, '');
    const basePath = path.dirname(fileName);
    let image = await Jimp.read(fileName);
    if (opts.resize) {
      image = this.resizeImage(image, shorterEdgeSize);
    }
    if (opts.watermark) {
      image = this.watermarkImage(image);
    }
    const resultPath = path.join(
      basePath,
      `${baseName}-${suffix}.${extension}`,
    );
    await image.writeAsync(resultPath);
    return resultPath;
  }

  public async createThumbnails(file: string): Promise<string[]> {
    return Promise.all([
      this.processImage(file, 'small', this.thumbSizes.small, {
        watermark: false,
        resize: true,
      }),
      this.processImage(file, 'large', this.thumbSizes.large, {
        watermark: true,
        resize: true,
      }),
    ]);
  }
}
