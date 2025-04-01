import { Injectable } from '@angular/core';
import parsePhoneNumberFromString from 'libphonenumber-js';
import { EPhoneNumberType } from 'src/app/core/enums/phone-type.enum';
import { Phone } from 'src/app/core/models/user.model';
import { phoneNumberValidatorByCountryCode } from 'src/app/app.constants';

@Injectable({
    providedIn: 'root'
})
export class PhoneService {
    A2: any = 'IL';

    constructor() {
    }

    public String2Phone(pn: string): Phone {
        const phone: Phone = new Phone();
        if (pn?.length > 0) {
            try {
                const phoneNumber = parsePhoneNumberFromString(pn, this.A2);
                const intl = phoneNumber.formatInternational();
                // if (typeof intl != 'undefined' && intl) {
                const parts = intl.split(' ');
                // }
                phone.countryCode = parts[0].substring(1);
                phone.areaCode = parts[1];
                phone.number = '';
                for (let i = 2; i < parts.length; i++) {
                    phone.number = phone.number + parts[i];
                }
                phone.type = EPhoneNumberType.Mobile;
            } catch (error) {
            }
            return phone;
        }
        return null;
    }

    public Phone2String(phone: Phone): string {
        let pn: string = '';
        if (phone?.number?.length > 0) {
            pn = '+' + phone.countryCode + phone.areaCode + phone.number;
            try {
                const phoneNumber = parsePhoneNumberFromString(pn, phoneNumberValidatorByCountryCode);
                if (phone.countryCode !== '972') {
                    pn = phoneNumber.formatInternational();
                } else {
                    pn = phoneNumber.formatNational();
                }
            } catch (error) {
            }
        }
        return pn;
    }

    public phoneStringToFormat(phoneNumber: string) {
       const number =  phoneNumber.replace(/\D/g, '').slice(3);
       return 0 + `${number.substr(0, 2)}-${number.substr(2, 3)}-${number.substr(5)}`;
    }
}
