import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
    transform(arr: any[], ...args: string[]) {
        if (!args[0] || args[0].length === 0) {
            return arr;
        }

        return arr.filter(val => val['name'].toLowerCase().includes(args[0]) ||
            val['description'].toLowerCase().includes(args[0]));
    }
}
