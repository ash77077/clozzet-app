import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkInputComponent } from './link-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/components/inputs/input/input.module';

@NgModule({
  declarations: [
    LinkInputComponent
  ],
  exports: [
    LinkInputComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        InputModule,
        ReactiveFormsModule
    ]
})
export class LinkInputModule { }
