import { Injectable } from '@angular/core';
import { DeviceService } from './device.service';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    selectedLanguage: string;

    constructor(private detect: DeviceService) {
        if (detect.isLocal) {
            this.selectedLanguage = 'en';
        } else {
            this.selectedLanguage = window.location.pathname.split('/')[1] || 'en';
        }
    }
}
