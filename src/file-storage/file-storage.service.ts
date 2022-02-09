import { Inject, Injectable } from '@nestjs/common';
import { AwsService } from '../cloud/aws/aws.service';

@Injectable()
export class FileStorageService {
  constructor(
    @Inject(AwsService)
    private readonly aws: AwsService,
  ) {}

  public async storeFile(filePath: string) {
    return this.aws.uploadFile(filePath);
  }
}
