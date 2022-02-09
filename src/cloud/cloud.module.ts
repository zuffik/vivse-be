import { Module } from '@nestjs/common';
import { AwsModule } from './aws/aws.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    AwsModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => ({
        s3Region: cfg.get<string>('AWS_S3_REGION'),
        s3BucketName: cfg.get<string>('AWS_S3_BUCKET_NAME'),
        accessKeyId: cfg.get<string>('AWS_ACCESS_KEY_ID'),
        secretAccessKey: cfg.get<string>('AWS_SECRET_ACCESS_KEY'),
      }),
    }),
  ],
  exports: [AwsModule],
})
export class CloudModule {}
