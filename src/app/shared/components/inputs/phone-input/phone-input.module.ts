import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneInputComponent } from './phone-input.component';
import { InputModule } from '../input/input.module';



@NgModule({
  declarations: [PhoneInputComponent],
  exports: [
    PhoneInputComponent
  ],
  imports: [
    CommonModule,
    InputModule
  ]
})
export class PhoneInputModule { }
