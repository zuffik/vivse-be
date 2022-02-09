import { Resolver } from '@nestjs/graphql';
import { Photo } from '../types/photo.entity';

@Resolver(() => Photo)
export class PhotoResolver {}
