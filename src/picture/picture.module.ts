import { BadRequestException, Module } from '@nestjs/common';
import { AlbumService } from './album/album.service';
import { AlbumController } from './album/album.controller';
import { PhotoService } from './photo/photo.service';
import { FileService } from './file/file.service';
import { DbModule } from '../db/db.module';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CloudModule } from '../cloud/cloud.module';
import { diskStorage } from 'multer';
import * as mime from 'mime';
import { AlbumResolver } from './album/album.resolver';
import { UtilsModule } from '../utils/utils.module';
import { GeneratorService } from '../utils/generator/generator.service';
import { PhotoResolver } from './photo/photo.resolver';
import { ImageService } from './image/image.service';

@Module({
  imports: [DbModule],
  providers: [
    AlbumService,
    AlbumResolver,
    PhotoService,
    FileService,
    PhotoResolver,
    ImageService,
  ],
  controllers: [AlbumController],
})
export class PictureModule {}
