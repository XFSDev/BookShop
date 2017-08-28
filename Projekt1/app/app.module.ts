import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { BookService } from './BookService';
import { FilterBook } from './Filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgInit } from './NgInit';


@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, FilterBook, NgInit],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
