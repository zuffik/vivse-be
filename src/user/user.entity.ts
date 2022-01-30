import { Field, ObjectType } from '@nestjs/graphql';
import { User as IUser } from '../../prisma/generated/client';

@ObjectType()
export class User implements Omit<IUser, 'password'> {
  @Field(() => String)
  id: string;
  @Field(() => String)
  email: string;
  @Field(() => String, { nullable: true })
  name: string | null;
}
