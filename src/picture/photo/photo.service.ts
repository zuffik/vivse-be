import { Inject, Injectable } from '@nestjs/common';
import { DbService } from '../../db/db.service';
import { FileService } from '../file/file.service';

@Injectable()
export class PhotoService {
  constructor(
    @Inject(DbService)
    private readonly db: DbService,
    @Inject(FileService)
    private readonly files: FileService,
  ) {}

  public async createPhotoWithOriginalFile(
    albumId: string,
    originalFilePath: string,
    smallThumbFilePath: string,
    largeThumbFilePath: string,
    label = '',
  ) {
    const file = await this.files.createFile(
      originalFilePath,
      smallThumbFilePath,
      largeThumbFilePath,
    );
    return await this.createPhoto(albumId, file.id, label);
  }

  public async createPhoto(
    albumId: string,
    originalFileId: string,
    label = '',
    editedFileId?: string,
  ) {
    return this.db.photo.create({
      data: {
        album: {
          connect: {
            id: albumId,
          },
        },
        originalFile: {
          connect: {
            id: originalFileId,
          },
        },
        label,
        editedFile: editedFileId
          ? {
              connect: {
                id: editedFileId,
              },
            }
          : {},
      },
    });
  }
}
