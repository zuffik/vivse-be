import { Field, ObjectType } from '@nestjs/graphql';
import { Photo as IPhoto } from '../../../prisma/generated/client';

@ObjectType()
export class Photo implements IPhoto {
  @Field(() => String)
  id: string;
  @Field(() => Date)
  createdAt: Date;
  @Field(() => String)
  label: string;
  @Field(() => String)
  albumId: string;
  @Field(() => String)
  editedFileId: string;
  @Field(() => String)
  originalFileId: string;
}
