import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { DbModule } from '../db/db.module';

@Module({
  imports: [DbModule],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
