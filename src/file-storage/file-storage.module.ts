import { BadRequestException, Module } from '@nestjs/common';
import { FileStorageService } from './file-storage.service';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UtilsModule } from '../utils/utils.module';
import { GeneratorService } from '../utils/generator/generator.service';
import { diskStorage } from 'multer';
import * as mime from 'mime';
import { CloudModule } from '../cloud/cloud.module';

@Module({
  providers: [FileStorageService],
  imports: [
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
    CloudModule,
  ],
})
export class FileStorageModule {}
