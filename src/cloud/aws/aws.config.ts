export interface AwsConfig {
  s3Region: string;
  s3BucketName: string;
  accessKeyId: string;
  secretAccessKey: string;
}

export const AWS_CONFIG_KEY = 'AWS_CONFIG';
