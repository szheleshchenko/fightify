import {inject, Injectable} from '@angular/core';
import {ApiService} from '@core/api-client';
import {instanceToPlain, plainToInstance} from 'class-transformer';
import {map, Observable} from 'rxjs';
import {AuthRequest, AuthResponse, RefreshTokenRequest, RegisterRequest} from './models';

@Injectable({providedIn: 'root'})
export class AuthService {
  private apiService = inject(ApiService);

  public login(credentials: AuthRequest): Observable<AuthResponse> {
    const request = new AuthRequest(credentials);

    return this.apiService
      .post<
        AuthRequest,
        AuthResponse
      >('/auth/login', instanceToPlain(request), {withCredentials: true})
      .pipe(map((response) => plainToInstance(AuthResponse, response)));
  }

  public register(registerRequest: RegisterRequest): Observable<AuthResponse> {
    const request = new RegisterRequest(registerRequest);

    return this.apiService.post<RegisterRequest, AuthResponse>(
      '/auth/register',
      instanceToPlain(request),
      {
        withCredentials: true,
      },
    );
  }

  public refreshToken(refreshTokenRequest: RefreshTokenRequest): Observable<AuthResponse> {
    return this.apiService
      .post<RefreshTokenRequest, AuthResponse>('auth/refresh-token', refreshTokenRequest)
      .pipe(map((response) => plainToInstance(AuthResponse, response)));
  }
}
