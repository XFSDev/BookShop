import { Book } from './BookModel';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

@Injectable()
export class BookService {

    baseUrl = 'http://localhost:52983/api/BookApi/';
    books: Book[] = [];
    constructor(private _http: Http) { }

    getBooksByParam(param: string) {        
        this.getData(param).subscribe(books => this.books = books);
        return this.books;
    }    
        
    private getData(param: string): Observable<Book[]> {
        return this._http.get(this.baseUrl + param).map(this.extractData);       
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || [];  }       
    }           