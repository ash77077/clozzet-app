import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import {AbstractControl, FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgClass, NgIf} from "@angular/common";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    imports: [ReactiveFormsModule, NgClass, NgIf],
    standalone: true,
    encapsulation: ViewEncapsulation.None
})
export class InputComponent implements OnInit{
    @Input() label: string | undefined;
    @Input() labelClass: string | undefined;
    @Input() inputClass: string | undefined;
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
