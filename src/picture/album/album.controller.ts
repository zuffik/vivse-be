import {
  Controller,
  Inject,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Photo } from '../../../prisma/generated/client';
import { FileService } from '../file/file.service';

@Controller('album')
export class AlbumController {
  constructor(
    @Inject(FileService)
    private readonly files: FileService,
  ) {}

  @Post('/:albumId/upload')
  @UseInterceptors(FileInterceptor('file'))
  public async upload(
    @UploadedFile() file: Express.Multer.File,
    @Param('albumId') albumId: string,
  ): Promise<Photo> {
    // todo create thumb
    console.log(file);
    const url = await this.files.storeFile(file.path);
    console.log(url);
    return {
      id: 'any',
      albumId,
      label: 'Label',
      createdAt: new Date(),
      editedFileId: 'any',
      originalFileId: 'any',
    };
  }
}
