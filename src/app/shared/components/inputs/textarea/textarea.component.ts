import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import {AbstractControl, FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgClass, NgIf} from "@angular/common";

@Component({
    selector: 'app-textarea',
    templateUrl: './textarea.component.html',
    standalone: true,
    imports: [ReactiveFormsModule, NgClass, NgIf],
    styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements AfterViewInit {
    @Input() public control: FormControl | AbstractControl | any;
    @Input() public label!: string;
    @Input() labelClass!: string;
    @Input() textareaInputClass!: string;
    @Input() public informationText!: string;
    @Input() public placeholder = '';
    @Input() public textBoxClass = '';
    @Input() public disabled = false;
    @Input() public required = false;
    @Input() public infoIcon = false;
    @Input() public focusedItem: boolean = false;
    @Input() public isCapitalizeFirstLetter: boolean = false;
    @Input() public maxlength: number = 2000;
    @Input() public autoSize: boolean = false;
    @Input() public rows: number = 3;
    //@Input() public autosize: boolean = true;

    @ViewChild('textarea', {static: false}) input!: ElementRef;

    get isRequired(): boolean {
        if (!this.control.validator) {
            return false;
        }
        const validator = this.control?.validator({} as AbstractControl);
        return !!(validator && validator.required);
    }

    constructor() {
    }

    ngAfterViewInit(): void {
        // if (this.focusedItem) {
        //     setTimeout(() => {
        //         this.input.nativeElement.focus();
        //     }, 0);
        // }
    }
}
