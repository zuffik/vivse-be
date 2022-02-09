import { BadRequestException, Module } from '@nestjs/common';
import { AlbumService } from './album/album.service';
import { AlbumController } from './album/album.controller';
import { PhotoService } from './photo/photo.service';
import { DbModule } from '../db/db.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AlbumResolver } from './album/album.resolver';
import { PhotoResolver } from './photo/photo.resolver';
import { ImageService } from './image/image.service';
import { FileStorageModule } from '../file-storage/file-storage.module';
import { MulterModule } from '@nestjs/platform-express';
import { UtilsModule } from '../utils/utils.module';
import { GeneratorService } from '../utils/generator/generator.service';
import { diskStorage } from 'multer';
import { FileService } from './file/file.service';
import * as mime from 'mime';

@Module({
  imports: [
    DbModule,
    ConfigModule,
    FileStorageModule,
    // todo make middleware
    MulterModule.registerAsync({
      imports: [ConfigModule, UtilsModule],
      inject: [ConfigService, GeneratorService],
      useFactory: (cfg: ConfigService, generator: GeneratorService) => ({
        dest: cfg.get<string>('APP_UPLOAD_DIR'),
        fileFilter: (req, file, cb) =>
          /^image\//.test(file.mimetype)
            ? cb(null, true)
            : cb(new BadRequestException('Only images allowed'), false),
        storage: diskStorage({
          filename: (req, file, cb) =>
            cb(null, generator.uuid() + '.' + mime.getExtension(file.mimetype)),
        }),
      }),
    }),
  ],
  providers: [
    AlbumService,
    AlbumResolver,
    PhotoService,
    PhotoResolver,
    ImageService,
    FileService,
  ],
  controllers: [AlbumController],
})
export class PictureModule {}
