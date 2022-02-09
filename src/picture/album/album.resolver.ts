import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Album } from '../types/album.entity';
import { AlbumService } from './album.service';
import { Inject } from '@nestjs/common';
import { Photo } from '../types/photo.entity';

@Resolver(() => Album)
export class AlbumResolver {
  constructor(
    @Inject(AlbumService)
    private readonly pictures: AlbumService,
  ) {}

  /*@ResolveField('main', () => Photo)
  public async main(@Parent() album: Album): Promise<Photo> {
    return this.pictures.mainPhoto(album.id);
  }*/
}
