import {inject, Injectable} from '@angular/core';
import {ApiService} from '@libs/shared/data-access/api-client';
import {plainToInstance} from 'class-transformer';
import {SsrCookieService} from 'ngx-cookie-service-ssr';
import {map, Observable, tap} from 'rxjs';
import {LoginRequest, LoginResponse, RefreshTokenRequest, RegisterRequest} from './models';

@Injectable({providedIn: 'root'})
export class AuthService {
  private apiService = inject(ApiService);
  public cookieService = inject(SsrCookieService);

  public login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.apiService
      .post<LoginRequest, LoginResponse>('auth/login', loginRequest, {withCredentials: true})
      .pipe(
        map((response) => plainToInstance(LoginResponse, response)),
        tap((response) => this.saveTokens(response)),
      );
  }

  public register(registerRequest: RegisterRequest): Observable<void> {
    return this.apiService.post<RegisterRequest, void>('auth/register', registerRequest);
  }

  public refreshToken(refreshTokenRequest: RefreshTokenRequest): Observable<LoginResponse> {
    return this.apiService
      .post<RefreshTokenRequest, LoginResponse>('auth/refresh-token', refreshTokenRequest)
      .pipe(
        map((response) => plainToInstance(LoginResponse, response)),
        tap((response) => this.saveTokens(response)),
      );
  }

  public getAccessToken(): string | null {
    return this.cookieService.get('access_token');
  }

  public logout(): void {
    this.cookieService.delete('access_token');
    this.cookieService.delete('refresh_token');
  }

  private saveTokens(response: LoginResponse): void {
    this.cookieService.set('access_token', response.accessToken, {
      expires: new Date().setDate(new Date().getDate() + 7),
      secure: true,
    });
    this.cookieService.set('refresh_token', response.refreshToken, {
      expires: new Date().setDate(new Date().getDate() + 7),
      secure: true,
    });
  }
}
