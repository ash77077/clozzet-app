import { Component, Input, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
    selector: 'app-number-input',
    templateUrl: './number-input.component.html',
    styleUrls: ['./number-input.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NumberInputComponent {
    @Input() label: string;
    @Input() labelClass: string;
    @Input() class: string;
    @Input() inputClass: string;
    @Input() control: FormControl | AbstractControl | any;
    @Input() placeholder: string = '';
    @Input() disabled: boolean = false;
    @Input() minAllowedValue: number = null;
    @Input() maxAllowedValue: number = null;
    @Input() unit: string;
    @Input() hideArrows: boolean = false;
    @Input() format: string = 'n2';
    @Input() showSpinButton: boolean = true;
    @Input() unitPosition: 'left' | 'right' = 'right';
    @Input() showRequiredSign: boolean = true;

    get isRequired(): boolean {
        if (!this.control.validator) {
            return false;
        }
        const validator = this.control?.validator({} as AbstractControl);
        return !!(validator && validator?.required);
    }

    numberValidator(event: any): void {
        if ((this.minAllowedValue !== null && event.target.value < this.minAllowedValue)) {
            event.preventDefault();
            event.target.value = this.minAllowedValue;
        }else if ((this.maxAllowedValue !== null && event.target.value > this.maxAllowedValue)) {
            event.preventDefault();
            event.target.value = this.maxAllowedValue;
        }
    }

    public disableMinusSymbol(event: KeyboardEvent): void {
        if (event.key === '-') {
            event.preventDefault();
        }
    }
}
