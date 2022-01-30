import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PayloadToSign } from '../types/payload-to-sign.type';
import { ConfigService } from '@nestjs/config';
import { User } from '../../../prisma/generated/client';
import { UserService } from '../../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(ConfigService)
    private readonly cfg: ConfigService,
    @Inject(UserService)
    private readonly users: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: cfg.get('APP_KEY'),
    });
  }

  async validate(payload: PayloadToSign): Promise<User> {
    return this.users.findOneById(payload.id);
  }
}
