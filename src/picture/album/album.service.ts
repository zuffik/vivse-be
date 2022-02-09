import { Inject, Injectable } from '@nestjs/common';
import { DbService } from '../../db/db.service';
import { Album, Photo } from '../../../prisma/generated/client';

@Injectable()
export class AlbumService {
  constructor(
    @Inject(DbService)
    private readonly db: DbService,
  ) {}

  public async mainPhoto(albumId: string): Promise<Photo> {
    return this.db.album.findUnique({ where: { id: albumId } }).main();
  }

  public async album(albumId: string): Promise<Album> {
    return this.db.album.findUnique({ where: { id: albumId } });
  }
}
