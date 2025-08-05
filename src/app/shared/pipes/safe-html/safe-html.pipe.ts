import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform {
    constructor(private sanitized: DomSanitizer) {
    }

    transform(value: string, args?: 'html' | 'resUrl' | 'imgUrl' | 'url' | 'script' | 'style')
        : SafeResourceUrl | SafeHtml | SafeUrl | SafeScript | SafeStyle {
        switch (args) {
            case 'html':
                return this.sanitized.bypassSecurityTrustHtml(value);
            case 'resUrl':
                return this.sanitized.bypassSecurityTrustResourceUrl(value);
            case 'imgUrl':
                return this.sanitized.bypassSecurityTrustResourceUrl('data:image/png;base64,' + value);
            case 'url':
                return this.sanitized.bypassSecurityTrustUrl(value);
            case 'script':
                return this.sanitized.bypassSecurityTrustScript(value);
            case 'style':
                return this.sanitized.bypassSecurityTrustStyle(value);
            default:
                return this.sanitized.bypassSecurityTrustHtml(value);
        }
    }
}
