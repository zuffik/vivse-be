import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { User } from '../../prisma/generated/client';

@Injectable()
export class UserService {
  constructor(private readonly db: DbService) {}

  public async findOneByEmail(email: string): Promise<User> {
    return this.db.user.findUnique({ where: { email } });
  }

  public async findOneById(id: string): Promise<User> {
    return this.db.user.findUnique({ where: { id } });
  }

  public async create(user: Omit<User, 'id'>) {
    return this.db.user.create({
      data: user,
      select: { id: true, name: true, email: true },
    });
  }
}
