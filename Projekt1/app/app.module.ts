import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { BookService } from './Book/BookService';
import { BookSearchComponent } from './Book/BookSearch.component';
import { ShoppingCardService } from './ShoppingCard/ShoppingCardService';
import { ShoppingCardComponent } from './ShoppingCard/ShoppingCard.component';
import { FilterBook } from './Filter';
import { CarrierService } from './ShoppingCard/Carrier/CarrierService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgInit } from './NgInit';
import { BookOverlapCategory } from './Book/BookOverlapCategory.component';

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, BookSearchComponent, BookOverlapCategory, ShoppingCardComponent, FilterBook, NgInit],
  providers: [BookService, CarrierService, ShoppingCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
