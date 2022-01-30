import { Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Resolver()
export class UserResolver {
  @UseGuards(JwtAuthGuard)
  @Query(() => String)
  public helloWorld() {
    return 'hello';
  }
}
