import {Expose} from 'class-transformer';

export class RegisterRequest {
  @Expose({name: 'username'})
  public username!: string;

  @Expose({name: 'password'})
  public password!: string;

  constructor(registerRequest: Partial<RegisterRequest> = {}) {
    Object.assign(this, registerRequest);
  }
}
