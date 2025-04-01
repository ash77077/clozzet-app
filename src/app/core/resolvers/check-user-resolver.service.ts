import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class CheckUserResolver {

    constructor(
    ) {
    }

    resolve(): any {
        // return this.userService.currentUser$.subscribe(user => {
        //     if (user) {
        //         if (user.role === EUserRole.DEALER) {
        //             this.router.navigate(['/pos']);
        //         } else {
        //             this.router.navigate(['/top-up']);
        //         }
        //     } else {
        //         this.router.navigate(['/auth'])
        //     }
        // });
        // this.loadingService.show();
        // if (this.userService.user) {
        //     this.loadingService.hide();
        //     return of(this.userService.user);
        // } else {
        //     return this.userService.getUserInfo()
        //         .pipe(
        //             take(1),
        //             tap((user: UserModel): UserModel => {
        //                 // this.authService.setUser(user);
        //                 // this.router.navigateByUrl('top-up');
        //                 this.loadingService.hide();
        //                 return user;
        //             }))
        //         .subscribe();
        // }
    }
}
