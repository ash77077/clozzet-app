import { Directive, EventEmitter, HostBinding, HostListener, Inject, Input, Output, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
    selector: '[appFileDrop]',
})
export class FileDropDirective {
    @Input() formats: string[] = [];

    @Output() fileDropped = new EventEmitter<File>();

    constructor(private r: Renderer2, @Inject(DOCUMENT) private document: Document) {
    }

    @HostBinding('style.background-color') background: string;

    // Dragover listener
    @HostListener('dragover', ['$event']) onDragOver(evt: any): void {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = 'var(--gray-400)';
    }

    // Dragleave listener
    @HostListener('dragleave', ['$event'])
    public onDragLeave(evt: any): void {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = 'var(--gray-200)';
    }

    // Drop listener
    @HostListener('drop', ['$event'])
    public ondrop(evt: any): void {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = 'var(--gray-200)';
    }
}
