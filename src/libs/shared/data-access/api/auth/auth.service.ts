import {inject, Injectable, signal} from '@angular/core';
import {ApiService} from '@libs/shared/data-access/api-client';
import {instanceToPlain, plainToInstance} from 'class-transformer';
import {SsrCookieService} from 'ngx-cookie-service-ssr';
import {map, Observable, tap} from 'rxjs';
import {AuthRequest, AuthResponse, RefreshTokenRequest, RegisterRequest} from './models';

@Injectable({providedIn: 'root'})
export class AuthService {
  private apiService = inject(ApiService);
  private cookieService = inject(SsrCookieService);
  public isAuthorized = signal<boolean>(false);

  constructor() {
    this.isAuthorized.set(!!this.getAccessToken());
  }

  public login(credentials: AuthRequest): Observable<AuthResponse> {
    const request = new AuthRequest(credentials);

    return this.apiService
      .post<
        AuthRequest,
        AuthResponse
      >('auth/login', instanceToPlain(request), {withCredentials: true})
      .pipe(
        map((response) => plainToInstance(AuthResponse, response)),
        tap((response) => this.saveTokens(response)),
      );
  }

  public register(registerRequest: RegisterRequest): Observable<void> {
    return this.apiService.post<RegisterRequest, void>('auth/register', registerRequest);
  }

  public refreshToken(refreshTokenRequest: RefreshTokenRequest): Observable<AuthResponse> {
    return this.apiService
      .post<RefreshTokenRequest, AuthResponse>('auth/refresh-token', refreshTokenRequest)
      .pipe(
        map((response) => plainToInstance(AuthResponse, response)),
        tap((response) => this.saveTokens(response)),
      );
  }

  public getAccessToken(): string | null {
    return this.cookieService.get('access_token');
  }

  public logout(): void {
    this.cookieService.delete('access_token');
    this.cookieService.delete('refresh_token');
    this.isAuthorized.set(false);
  }

  private saveTokens(response: AuthResponse): void {
    this.cookieService.set('access_token', response.accessToken, {
      expires: new Date().setDate(new Date().getDate() + 7),
      secure: true,
    });
    this.cookieService.set('refresh_token', response.refreshToken, {
      expires: new Date().setDate(new Date().getDate() + 7),
      secure: true,
    });
    this.isAuthorized.set(true);
  }
}
