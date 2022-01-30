import * as Joi from '@hapi/joi';

export const configSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production')
    .default('development'),
  CI: Joi.boolean().default(false),
  APP_KEY: Joi.string().required(),
  DATABASE_URL: Joi.string().required(),
});
