import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-popup-wrapper',
    templateUrl: './popup-wrapper.component.html',
    styleUrls: ['./popup-wrapper.component.scss'],
})
export class PopupWrapperComponent {
    @Input() title: string;
    @Input() enableTitle: boolean = true;
    @Input() enableBody: boolean = true;
    @Input() enableHeader: boolean = true;
    @Input() footerClass: string | string[] = 'justify-content-center';
    @Input() bodyClass: string | string[];
    @Input() headerClass: string | string[];
    @Input() xButtonClass: string | string[];
    @Input() contentClass: string | string[];
    @Input() enableXButton: boolean = true;
    @Input() enableApplyButton: boolean = true;
    @Input() applyButtonTitle: string = $localize`Apply`;
    @Input() applyButtonClass: string | string[] = 'btn-apply';
    @Input() disableApplyButton: boolean = false;
    @Input() enableCloseButton: boolean = true;
    @Input() closeButtonTitle: string = $localize`Close`;
    @Input() closeButtonClass: string | string[];
    @Input() applyTitleClass: string | string[];
    @Input() revert: boolean = false;
    @Output() apply: EventEmitter<any> = new EventEmitter();
    @Output() closePopup: EventEmitter<any> = new EventEmitter();
}
