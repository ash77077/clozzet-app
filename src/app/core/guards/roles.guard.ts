import { ActivatedRouteSnapshot, CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { EUserRole } from '../enums/user-role.enum';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user.model';

export const rolesGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | any => {
  const userService: UserService = inject(UserService);
  const router: Router = inject(Router);
  const expectedRoles: EUserRole[] = route.data[`roles`];
  return userService.currentUser$.pipe(filter((u) => !!u)).subscribe((user: UserModel): boolean => {
    if (expectedRoles.includes(user?.role)) {
      // if (route.parent!.routeConfig!.path === ENavBar.BULK_TOP_UP) {
      //   router.navigate(['/']);
      //   return false;
      // }
      return true;
    } else {
      if (user?.role === EUserRole.GUEST) {
        router.navigate(['/landing']);
      } else {
        router.navigate(['/']);
      }
      return false;
    }
  });
};
