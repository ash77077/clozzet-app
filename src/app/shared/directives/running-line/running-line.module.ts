import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunningLineDirective } from './running-line.directive';


@NgModule({
    declarations: [
        RunningLineDirective
    ],
    exports: [
        RunningLineDirective
    ],
    imports: [
        CommonModule
    ]
})
export class RunningLineModule {
}
