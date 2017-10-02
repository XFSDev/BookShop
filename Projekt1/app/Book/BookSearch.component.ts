import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'BookSearch',
    templateUrl: `app/Book/BookSearch.html`,
    styleUrls: [`Content/style.css`],
})
export class BookSearchComponent {
    @Input() selected: string = '';
    @Output() ClickOn = new EventEmitter<string>();

    setFilterArgs(value: string) {
        this.selected = value;
        this.ClickOn.emit(this.selected);
    }
}
