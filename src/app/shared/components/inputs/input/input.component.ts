import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class InputComponent implements OnInit{
    @Input() label: string;
    @Input() labelClass: string;
    @Input() inputClass: string;
    @Input() control: FormControl | AbstractControl | any;
    @Input() placeholder: string = '';
    @Input() disabled: boolean = false;
    @Input() type: string = 'text';

    get isRequired(): boolean {
        if (!this.control?.validator) {
            return false;
        }
        const validator = this.control?.validator({} as AbstractControl);
        return !!(validator && validator?.required);
    }

    ngOnInit(): void {
        this.disabled ? this.control?.disable() : this.control?.enable();
    }
}
