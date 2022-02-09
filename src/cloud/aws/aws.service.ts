import { Inject, Injectable } from '@nestjs/common';
import { AWS_CONFIG_KEY, AwsConfig } from './aws.config';
import { S3 } from 'aws-sdk';
import * as fs from 'fs';
import { promisify } from 'util';
import { GeneratorService } from '../../utils/generator/generator.service';

@Injectable()
export class AwsService {
  private readonly client: S3;

  constructor(
    @Inject(AWS_CONFIG_KEY)
    private readonly config: AwsConfig,
    @Inject(GeneratorService)
    private readonly generator: GeneratorService,
  ) {
    this.client = new S3({
      credentials: {
        accessKeyId: this.config.accessKeyId,
        secretAccessKey: this.config.secretAccessKey,
      },
    });
  }

  private getUrl(key: string): URL {
    return new URL(
      `${this.config.s3BucketName}/${key}`,
      `https://s3.${this.config.s3Region}.amazonaws.com/`,
    );
  }

  public async uploadFile(filePath: string): Promise<URL> {
    const key =
      this.generator.uuid() + filePath.slice(filePath.lastIndexOf('.'));
    const uploadPromised = promisify(this.client.upload.bind(this.client));
    await uploadPromised({
      Bucket: this.config.s3BucketName,
      Body: fs.createReadStream(filePath),
      Key: key,
    });
    return this.getUrl(key);
  }
}
