import { Field, ObjectType } from '@nestjs/graphql';
import { Album as IAlbum } from '../../../prisma/generated/client';

@ObjectType()
export class Album implements IAlbum {
  @Field(() => String)
  id: string;
  @Field(() => Date)
  createdAt: Date;
  @Field(() => String)
  label: string;
  @Field(() => String)
  mainPhotoId: string;
}
