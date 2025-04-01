import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberInputComponent } from './number-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';

@NgModule({
    declarations: [
        NumberInputComponent
    ],
    exports: [
        NumberInputComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NumericTextBoxModule
    ]
})
export class NumberInputModule {
}
