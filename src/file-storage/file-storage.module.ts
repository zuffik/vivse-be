import { Module } from '@nestjs/common';
import { FileStorageService } from './file-storage.service';
import { CloudModule } from '../cloud/cloud.module';

@Module({
  providers: [FileStorageService],
  imports: [CloudModule],
  exports: [FileStorageService],
})
export class FileStorageModule {}
