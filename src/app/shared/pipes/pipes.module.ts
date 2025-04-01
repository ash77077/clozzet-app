import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';
import { SafeHtmlPipe } from 'src/app/shared/pipes/safe-html/safe-html.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
    declarations: [OrderByPipe, SafeHtmlPipe, SearchPipe],
    exports: [OrderByPipe, SafeHtmlPipe, SearchPipe],
    imports: [CommonModule],
})
export class PipesModule {
}
