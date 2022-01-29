import { Field, ObjectType } from '@nestjs/graphql';
import { User as IUser } from '../db/generated/client';

@ObjectType()
export class User implements IUser {
  @Field(() => String)
  id: string;
  @Field(() => String)
  email: string;
  @Field(() => String, { nullable: true })
  name: string | null;
  @Field(() => String)
  password: string;
}
