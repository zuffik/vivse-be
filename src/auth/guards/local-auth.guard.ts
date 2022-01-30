import { AuthGuard } from '@nestjs/passport';
import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    (req as Request).body = ctx.getArgs();
    return req;
  }
  handleRequest(err, user, info) {
    if (err || info || !user) {
      throw err || info || new UnauthorizedException();
    }
    return user;
  }
}
