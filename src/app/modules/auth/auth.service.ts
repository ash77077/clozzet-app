import { Injectable, Injector } from '@angular/core';
import { map, Observable, tap, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { IUser, UserModel } from '../../core/models/user.model';
import { ApiService } from '../../core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiService {
  public user!: UserModel | null;

  constructor(
    protected override injector: Injector,
    private userService: UserService,
    private router: Router,
  ) {
    super(injector);
  }

  login(body: any): Observable<IUser> {
    return this.post<IUser>(['auth', 'login'], body).pipe(
      map((obj: IUser): UserModel => new UserModel(obj)),
      tap((user: UserModel): void => {
        this.setUser(user);
      }),
      catchError((error: HttpErrorResponse) => {
        this.setUser(null);
        if ([491, 404].includes(error.status)) {
          // this.notificationService.httpError(error);
        }
        return throwError(() => new Error(error.message));
      }),
    );
  }

  public setUser(user: UserModel | null): void {
    if (user?.id) {
      this.userService.isLoggedIn = true;
      this.user = this.userService.user = new UserModel(user);
      this.userService.currentUser$.next(new UserModel(user));
    } else {
      this.userService.isLoggedIn = false;
      this.user = this.userService.user = null;
      this.userService.currentUser$.next(null);
      sessionStorage.clear();
      this.router.navigate(['/auth']);
    }
  }

  public logOut(): void {
    this.setUser(null);
  }
}
