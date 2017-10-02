import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'BookOverlapCategory',
    templateUrl: `app/Book/BookOverlapCategory.html`,
    styleUrls: [`Content/style.css`],
})

export class BookOverlapCategory {

    @Input() selectedItem: string='';
    @Output() ClickCategory = new EventEmitter<string>();

    getBooks(value: string) {
        this.selectedItem = value;
        this.ClickCategory.emit(this.selectedItem);
    }
}