import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { configSchema } from './config/config.schema';
import { PictureModule } from './picture/picture.module';
import { CloudModule } from './cloud/cloud.module';
import { UtilsModule } from './utils/utils.module';
import { FileStorageModule } from './file-storage/file-storage.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        '.env',
        `.env.${process.env.NODE_ENV}`,
        '.env.local',
        `.env.${process.env.NODE_ENV}.local`,
      ]
        .map((r) => `${process.cwd()}/${r}`)
        .reverse(),
      isGlobal: true,
      validationSchema: configSchema,
      expandVariables: true,
    }),
    DbModule,
    GraphQLModule.forRoot({ autoSchemaFile: './schema.gql' }),
    UserModule,
    AuthModule,
    PictureModule,
    CloudModule,
    UtilsModule,
    FileStorageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
