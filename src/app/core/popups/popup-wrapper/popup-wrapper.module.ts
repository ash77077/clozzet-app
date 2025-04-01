import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupWrapperComponent } from './popup-wrapper.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [PopupWrapperComponent],
    exports: [PopupWrapperComponent],
    imports: [CommonModule, MatIconModule],
})
export class PopupWrapperModule {
}
