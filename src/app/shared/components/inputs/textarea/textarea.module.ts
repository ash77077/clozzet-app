import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextareaComponent } from './textarea.component';

@NgModule({
    declarations: [
        TextareaComponent
    ],
    exports: [
        TextareaComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class TextareaModule {
}