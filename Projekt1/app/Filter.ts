import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Book } from './Book/BookModel';

@Pipe({
    name: 'FilterBook',
    pure: false
})
@Injectable()
export class FilterBook implements PipeTransform {
    transform(items: Book[], filter: string): any {
        return filter && items ?
            items.filter(book =>
                (book.Nazwa.indexOf(filter) !== -1) ||
                (book.Autor.indexOf(filter) !== -1)
            ) : this.check(items);          
    }
    private check(items: Book[])
    {
        if (items.length > 0)
            return items; else return [-1];
    }
}
