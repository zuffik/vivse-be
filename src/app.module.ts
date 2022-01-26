import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { GraphQLModule } from '@nestjs/graphql';
import { DemoResolver } from './demo.resolver';

@Module({
  imports: [
    DbModule,
    GraphQLModule.forRoot({ autoSchemaFile: './schema.gql' }),
  ],
  controllers: [],
  providers: [DemoResolver],
})
export class AppModule {}
