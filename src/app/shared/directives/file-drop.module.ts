import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileDropDirective } from 'src/app/shared/directives/file-drop.directive';



@NgModule({
  declarations: [FileDropDirective],
  exports: [
    FileDropDirective
  ],
  imports: [
    CommonModule,
  ]
})
export class FileDropModule { }
