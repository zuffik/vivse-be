import {
  Controller,
  Inject,
  NotFoundException,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Photo } from '../../../prisma/generated/client';
import { ImageService } from '../image/image.service';
import { FileStorageService } from '../../file-storage/file-storage.service';
import { PhotoService } from '../photo/photo.service';
import { AlbumService } from './album.service';

@Controller('album')
export class AlbumController {
  constructor(
    @Inject(ImageService)
    private readonly images: ImageService,
    @Inject(FileStorageService)
    private readonly fileStorage: FileStorageService,
    @Inject(PhotoService)
    private readonly photos: PhotoService,
    @Inject(AlbumService)
    private readonly albums: AlbumService,
  ) {}

  @Post('/:albumId/upload')
  @UseInterceptors(FileInterceptor('file'))
  public async upload(
    @UploadedFile() file: Express.Multer.File,
    @Param('albumId') albumId: string,
  ): Promise<Photo> {
    const album = await this.albums.album(albumId);
    if (!album) throw new NotFoundException();
    const [smallThumb, largeThumb] = await this.images.createThumbnails(
      file.path,
    );
    const [original, small, large] = await Promise.all([
      this.fileStorage.storeFile(file.path),
      this.fileStorage.storeFile(smallThumb),
      this.fileStorage.storeFile(largeThumb),
    ]);
    return this.photos.createPhotoWithOriginalFile(
      albumId,
      original.href,
      small.href,
      large.href,
    );
  }
}
