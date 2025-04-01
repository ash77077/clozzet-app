import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

    transform(data: any, field: string = 'priority'): any {
        if (data && data.length && data.length > 1) {
            data.sort((a: any, b: any) => {
                if (a[field] < b[field]) {
                    return -1;
                } else if (a[field] > b[field]) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
        return data;
    }
}
