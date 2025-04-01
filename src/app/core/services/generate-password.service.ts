
import { Injectable } from '@angular/core';
import {generatedPasswordLength} from "../../app.constants";


@Injectable({
    providedIn: 'root',
})
export class GeneratePasswordService {

    generateOTP(): string {
        const passwordRegex = /^[A-Za-z0-9*#?.!]+$/;
        let password = '';

        while (!password.match(passwordRegex)) {
            password = '';
            for (let i = 0; i < generatedPasswordLength; i++) {
                const randomIndex = Math.floor(Math.random() * 94) + 33;
                password += String.fromCharCode(randomIndex);
            }
        }
        return password;
    }
}

