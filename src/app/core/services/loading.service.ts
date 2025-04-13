import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    public loading$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    constructor() {
    }

    increment(): void {
        this.loading$.next(this.loading$.value + 1);
    }

    decrement(): void {
        this.loading$.next(Math.max(0, this.loading$.value - 1));
    }

    reset(): void {
        this.loading$.next(0);
    }
}
