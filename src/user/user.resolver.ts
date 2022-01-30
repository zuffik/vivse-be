import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { User } from './user.entity';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { UserInput } from './types/user.input';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';

@UseGuards(JwtAuthGuard)
@Resolver()
export class UserResolver {
  constructor(
    @Inject(UserService)
    private readonly users: UserService,
    @Inject(AuthService)
    private readonly auth: AuthService,
  ) {}

  @Query(() => User)
  public me(@CurrentUser() user: User) {
    return user;
  }

  @Mutation(() => User)
  public async createUser(@Args('user') user: UserInput) {
    return this.users.create({
      password: await this.auth.generatePasswordHash(user.password),
      email: user.email,
      name: user.name,
    });
  }
}
