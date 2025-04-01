import { DestroyRef, Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, filter } from 'rxjs';
import { EUserRole } from '../../../core/enums/user-role.enum';
import { UserModel } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';

@Directive({
  selector: '[appForRoles]',
  standalone: true, // Changed to standalone
})
export class ForRolesDirective {
  private readonly userService = inject(UserService);
  private readonly templateRef = inject(TemplateRef<unknown>);
  private readonly viewContainer = inject(ViewContainerRef);
  private readonly destroyRef = inject(DestroyRef);

  private readonly isShow$ = new BehaviorSubject<boolean>(true);

  @Input({ required: true }) set appForRoles(inputData: { roles: EUserRole[] | undefined }) {
    this.userService.currentUser$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter((user): user is UserModel => user !== null),
      )
      .subscribe((user) => {
        const show = inputData.roles ? inputData.roles.includes(user.role) : false;

        this.isShow$.next(show);
        this.viewContainer.clear();

        if (show) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        }
      });
  }
}
