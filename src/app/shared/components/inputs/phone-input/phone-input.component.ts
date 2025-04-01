import { Component, Input } from '@angular/core';
import { AsYouType } from 'libphonenumber-js';
import { phoneNumberValidatorByCountryCode } from 'src/app/app.constants';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
    selector: 'app-phone-input',
    templateUrl: './phone-input.component.html',
    styleUrls: ['./phone-input.component.scss']
})
export class PhoneInputComponent {
    @Input() control: FormControl | AbstractControl | any;
    @Input() labelClass: string;
    @Input() inputClass: string;

    public asYouType: AsYouType = new AsYouType(phoneNumberValidatorByCountryCode);

    onChangePhone(event: any): void {
        const target = event.target || event.srcElement || event.currentTarget;
        this.asYouType.reset();
        target.value = this.asYouType.input(target.value);
    }
}
