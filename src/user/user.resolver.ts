import { Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  @Mutation()
  public async login() {}
}
