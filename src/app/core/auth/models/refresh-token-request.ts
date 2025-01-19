import {Expose} from 'class-transformer';

export class RefreshTokenRequest {
  @Expose({name: 'refresh_token'})
  public refreshToken!: string;

  constructor(refreshTokenRequest: Partial<RefreshTokenRequest> = {}) {
    Object.assign(this, refreshTokenRequest);
  }
}
