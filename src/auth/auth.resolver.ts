import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { CredentialsInput } from './types/credentials.input';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from '../user/user.entity';
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
    @Args('credentials') credentials: CredentialsInput,
    @CurrentUser() user: User,
  ) {
    return {
      token: this.authService.generateToken(user),
    };
  }
}
