import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from '../user/types/user.entity';
import { Token } from './types/token.type';

@Resolver()
export class AuthResolver {
  constructor(
    @Inject(AuthService)
    private readonly authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Mutation(() => Token)
  public async login(
    @Args('email') email: string,
    @Args('password') password: string,
    @CurrentUser() user: User,
  ) {
    return {
      token: this.authService.generateToken(user),
    };
  }
}
