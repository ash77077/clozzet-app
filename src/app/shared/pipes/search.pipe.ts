import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(items: any[], searchText: string): any[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();

        return items.filter(it => {
            return it.details[0].name.toLowerCase().includes(searchText)
                || it.retailPrice.toString().toLowerCase().includes(searchText)
                || it.details[0].description.toLowerCase().includes(searchText);
        });
    }

}
