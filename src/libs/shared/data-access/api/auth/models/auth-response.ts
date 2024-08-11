import {Expose} from 'class-transformer';

export class AuthResponse {
  @Expose({name: 'access_token'})
  public accessToken!: string;

  @Expose({name: 'refresh_token'})
  public refreshToken!: string;

  constructor(loginResponse: Partial<AuthResponse> = {}) {
    Object.assign(this, loginResponse);
  }
}
