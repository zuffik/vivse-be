import * as Joi from '@hapi/joi';

export const configSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production')
    .default('development'),
  CI: Joi.boolean().default(false),
  APP_KEY: Joi.string().required(),
  DATABASE_URL: Joi.string().required(),

  AWS_S3_REGION: Joi.string().default('us-east-1'),
  AWS_S3_BUCKET_NAME: Joi.string().required(),
  AWS_ACCESS_KEY_ID: Joi.string().required(),
  AWS_SECRET_ACCESS_KEY: Joi.string().required(),
});
