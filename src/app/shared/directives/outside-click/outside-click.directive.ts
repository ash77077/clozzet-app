import { Directive, ElementRef, Output, EventEmitter, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appOutsideClick]',
})
export class OutsideClickDirective {
    @Output() public clickOutside: EventEmitter<void> = new EventEmitter<void>();
    @Input('appOutsideClick') public isMobile: boolean;

    constructor(private elRef: ElementRef) {
    }

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement: HTMLElement): void {
        if (!this.isMobile) {
            const clickedInside = this.elRef.nativeElement.contains(targetElement);
            if (!clickedInside) {
                this.clickOutside.emit();
            }
        }
    }
}
