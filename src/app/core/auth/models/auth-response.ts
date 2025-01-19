import {Expose} from 'class-transformer';
import {User} from '../../user';

export class AuthResponse {
  @Expose({name: 'access_token'})
  public accessToken!: string;

  @Expose({name: 'refresh_token'})
  public refreshToken!: string;

  @Expose()
  public user!: User;

  constructor(loginResponse: Partial<AuthResponse> = {}) {
    Object.assign(this, loginResponse);
  }
}
