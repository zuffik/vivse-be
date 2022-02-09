import { Inject, Injectable } from '@nestjs/common';
import { DbService } from '../../db/db.service';

@Injectable()
export class PhotoService {
  constructor(
    @Inject(DbService)
    private readonly db: DbService,
  ) {}

  public async createPhoto(albumId: string, label: string) {
    return this.db.photo.create({
      data: {
        album: {
          connect: {
            id: albumId,
          },
        },
        label,
      } as any,
    });
  }
}
