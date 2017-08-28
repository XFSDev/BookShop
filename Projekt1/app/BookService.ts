import { Book } from './Book';
import { carrier } from './carrier';
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
    UrlForGetCarrier = 'http://localhost:52983/api/BookApi/GetCarrierByBookId/';

    constructor(private _http: Http) { }
            
    getData(): Observable<Book[]> {
        return this._http.get(this.baseUrl+"GetAllBooks").map(this.extractData)
    }
    getAudiobook(): Observable<Book[]> {
        return this._http.get(this.baseUrl+"GetAllAudiobooks").map(this.extractData)
    }
    getEbook(): Observable<Book[]> {
        return this._http.get(this.baseUrl+"GetAllEbooks").map(this.extractData)
    }
    getNews(): Observable<Book[]> {
        return this._http.get(this.baseUrl + "GetAllNews").map(this.extractData)
    }
    getPreviews(): Observable<Book[]> {
        return this._http.get(this.baseUrl + "GetAllPreviews").map(this.extractData)
    }
    getOpportunitys(): Observable<Book[]> {
        return this._http.get(this.baseUrl + "GetAllopportunitys").map(this.extractData)
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || [];  }   
    
    getCarrier(id: number): Observable<carrier> {
        return this._http.get(this.UrlForGetCarrier + id)
            .map((response: Response) => <carrier>response.json());}
    }