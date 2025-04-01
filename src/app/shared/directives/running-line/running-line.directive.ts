import { Directive, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[appRunningLine]'
})
export class RunningLineDirective implements OnInit, OnChanges {
    @Output() public clickOutside: EventEmitter<void> = new EventEmitter<void>();
    @Input('appRunningLine') public newsData: any;

    constructor(private elRef: ElementRef) {
    }

    public ngOnInit(): void {
        this.elRef.nativeElement.style.display = 'none';
    }

    public ngOnChanges(changes: SimpleChanges): void {
        const data = changes['newsData'].currentValue;
        if (data?.length) {
            const textSum = data.reduce((accumulator: any, currentValue: any) => {
                return accumulator.text + currentValue.text;
            });
            this.elRef.nativeElement.style.display = 'block';
            this.elRef.nativeElement.style.animationDuration = (textSum.length * 0.1 < 20 ? 20 : textSum.length * 0.1) + 's';
        }
    }
}
