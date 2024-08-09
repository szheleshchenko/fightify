import {Expose} from 'class-transformer';

export class LoginRequest {
  @Expose({name: 'username'})
  public username!: string;

  @Expose({name: 'password'})
  public password!: string;

  constructor(loginRequest: Partial<LoginRequest> = {}) {
    Object.assign(this, loginRequest);
  }
}
