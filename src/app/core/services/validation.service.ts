import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import {
    isPossiblePhoneNumber,
    isValidNumberForRegion,
    isValidPhoneNumber,
    validatePhoneNumberLength
} from 'libphonenumber-js';
import { phoneNumberValidatorByCountryCode } from 'src/app/app.constants';


@Injectable({
    providedIn: 'root',
})
export class ValidationService {

    public phoneNumberValidator(): ValidatorFn {
        return (control: AbstractControl): { [p: string]: any } | null => {
            if (!control.value) {
                return {message: 'err'};
            }
            if (
                isValidPhoneNumber(control.value, phoneNumberValidatorByCountryCode) &&
                isPossiblePhoneNumber(control.value, phoneNumberValidatorByCountryCode) &&
                isValidNumberForRegion(control.value, phoneNumberValidatorByCountryCode) &&
                !validatePhoneNumberLength(control.value, phoneNumberValidatorByCountryCode)
            ) {
                return null;
            } else {
                return {message: 'err'};
            }
        };
    }

}
