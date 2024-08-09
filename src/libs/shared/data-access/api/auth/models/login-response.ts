import {Expose} from 'class-transformer';

export class LoginResponse {
  @Expose({name: 'access_token'})
  public accessToken!: string;

  @Expose({name: 'refresh_token'})
  public refreshToken!: string;

  constructor(loginResponse: Partial<LoginResponse> = {}) {
    Object.assign(this, loginResponse);
  }
}
