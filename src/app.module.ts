import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { configSchema } from './config/config.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        '.env.common',
        '.env',
        `.env.${process.env.NODE_ENV}`,
        '.env.local',
        `.env.${process.env.NODE_ENV}.local`,
      ]
        .map((r) => `${process.cwd()}/${r}`)
        .reverse(),
      isGlobal: true,
      validationSchema: configSchema,
    }),
    DbModule,
    GraphQLModule.forRoot({ autoSchemaFile: './schema.gql' }),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
