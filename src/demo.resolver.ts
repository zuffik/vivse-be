import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class DemoResolver {
  @Query(() => String)
  public async helloWorld() {
    return 'hello world';
  }
}
