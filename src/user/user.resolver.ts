import { Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  @Query(() => String)
  public helloWorld() {
    return 'hello';
  }
}
