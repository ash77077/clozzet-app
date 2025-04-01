import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from '../../modules/auth/auth.service';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const authService = inject(AuthService);

  let token = '';
  const headers: Record<string, string> = {};

  if (!req.url.includes('Auth/login') && sessionStorage?.getItem('access_token')) {
    token = JSON.parse(sessionStorage?.getItem('access_token') || '');
  }

  headers['Authorization'] = `Bearer ${token}`;

  const authReq = req.clone({
    setHeaders: headers,
  });

  return next(authReq).pipe(
    catchError((err: HttpErrorResponse): Observable<never> => {
      if (err?.status === 401) {
        authService.logOut();
      }
      return throwError(() => err);
    }),
    tap((res: any): void => {
      if (res.url === 'https://api.harel.software/api/Auth' && res.body?.id) {
        authService.setUser(res.body);
      }
    }),
  );
};
