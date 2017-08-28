import { Component, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    selector: 't',
    template: `<tr>
                <th><a href="#" (click)="thClicked(1)"> Wszystkie</a></th>
                <th><a href="#" (click)="thClicked(2)"> Audiobooki</a></th>
                <th><a href="#" (click)="thClicked(3)"> E-book</a></th>
               <tr>
               `,
    })

export class table1 {

    @Input() selectedItem: number = 1;
    @Output() Click = new EventEmitter();
    
    thClicked(value: number) {

        this.selectedItem = value;
        this.Click.emit(this.selectedItem);
    }

    }