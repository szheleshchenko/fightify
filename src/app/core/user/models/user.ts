import {BaseEntity} from '@libs/shared/data-access/api-client';
import {Expose} from 'class-transformer';

export class User extends BaseEntity {
  @Expose()
  public username!: string;

  constructor(user: Partial<User> = {}) {
    super(user);

    Object.assign(this, user);
  }
}
