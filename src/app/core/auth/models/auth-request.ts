import {Expose} from 'class-transformer';

export class AuthRequest {
  @Expose({name: 'username'})
  public username!: string;

  @Expose({name: 'password'})
  public password!: string;

  constructor(loginRequest: Partial<AuthRequest> = {}) {
    Object.assign(this, loginRequest);
  }
}
