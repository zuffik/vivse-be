import { Inject, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../db/generated/client';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PayloadToSign } from './types/payload-to-sign.type';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserService)
    private readonly users: UserService,
    @Inject(JwtService)
    private readonly jwt: JwtService,
  ) {}

  public generatePasswordHash(password: string): string {
    return bcrypt.hashSync(password, 10);
  }

  private verifyPassword(hashedPassword: string, password: string): boolean {
    return bcrypt.compareSync(password, hashedPassword);
  }

  public async authenticate(credentials: Credentials): Promise<User | null> {
    const user = await this.users.findOneByEmail(credentials.email);
    if (!this.verifyPassword(user.password, credentials.password)) return null;
    return user;
  }

  public generateToken(user: User): string {
    const payloadToSign: PayloadToSign = {
      id: user.id,
      email: user.email,
    };
    return this.jwt.sign(payloadToSign);
  }
}
