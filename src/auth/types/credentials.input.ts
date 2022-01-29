import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CredentialsInput implements Credentials {
  @Field(() => String)
  email: string;
  @Field(() => String)
  password: string;
}
