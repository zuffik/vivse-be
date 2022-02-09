import { Inject, Injectable } from '@nestjs/common';
import { DbService } from '../../db/db.service';
import { ImageFile } from '../../../prisma/generated/client';

@Injectable()
export class FileService {
  constructor(
    @Inject(DbService)
    private readonly db: DbService,
  ) {}

  public async createFile(
    original: string,
    small: string,
    large: string,
  ): Promise<ImageFile> {
    return this.db.imageFile.create({
      data: {
        original,
        small,
        large,
      },
    });
  }
}
