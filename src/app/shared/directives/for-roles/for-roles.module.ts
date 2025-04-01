import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForRolesDirective } from './for-roles.directive';

@NgModule({
  declarations: [],
  imports: [CommonModule, ForRolesDirective],
  exports: [ForRolesDirective],
})
export class ForRolesModule {}
