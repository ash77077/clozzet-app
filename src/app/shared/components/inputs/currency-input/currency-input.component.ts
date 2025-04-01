import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
    selector: 'app-currency-input',
    templateUrl: './currency-input.component.html',
    styleUrls: ['./currency-input.component.scss']
})
export class CurrencyInputComponent {
    @Input() label: string;
    @Input() labelClass: string;
    @Input() inputClass: string;
    @Input() control: FormControl | AbstractControl | any;
    @Input() placeholder: string = '';
    @Input() disabled: boolean = false;
    @Input() type: string = 'text';

    get isRequired(): boolean {
        if (!this.control.validator) {
            return false;
        }
        const validator = this.control?.validator({} as AbstractControl);
        return !!(validator && validator?.required);
    }
}
