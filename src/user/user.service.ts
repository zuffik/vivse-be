import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { User } from '../db/generated/client';

@Injectable()
export class UserService {
  constructor(private readonly db: DbService) {}

  public async findOneByEmail(email: string): Promise<User> {
    return this.db.user.findUnique({ where: { email } });
  }
}