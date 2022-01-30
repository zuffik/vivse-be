import { Inject, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../../prisma/generated/client';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';
import { PayloadToSign } from './types/payload-to-sign.type';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserService)
    private readonly users: UserService,
    @Inject(JwtService)
    private readonly jwt: JwtService,
  ) {}

  async generatePasswordHash(password: string) {
    return new Promise((resolve, reject) => {
      const salt = crypto.randomBytes(8).toString('hex');

      crypto.scrypt(password, salt, 64, (err, derivedKey) => {
        if (err) reject(err);
        resolve(salt + ':' + derivedKey.toString('hex'));
      });
    });
  }

  async verifyPassword(password: string, hash: string) {
    return new Promise((resolve, reject) => {
      const [salt, key] = hash.split(':');
      crypto.scrypt(password, salt, 64, (err, derivedKey) => {
        if (err) reject(err);
        resolve(key === derivedKey.toString('hex'));
      });
    });
  }

  public async authenticate(credentials: Credentials): Promise<User | null> {
    const user = await this.users.findOneByEmail(credentials.email);
    if (
      !user ||
      !(await this.verifyPassword(credentials.password, user.password))
    )
      return null;
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
