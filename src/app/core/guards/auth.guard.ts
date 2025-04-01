import { CanActivateFn, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = ():
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | any => {
  const userService: UserService = inject(UserService);
  if (userService.isLoggedIn) {
    return true;
  } else {
    userService.getUserInfo().subscribe();
    return true;
  }
};
