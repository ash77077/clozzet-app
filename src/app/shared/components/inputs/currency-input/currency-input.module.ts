import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyInputComponent } from './currency-input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [CurrencyInputComponent],
    exports: [
        CurrencyInputComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class CurrencyInputModule { }
