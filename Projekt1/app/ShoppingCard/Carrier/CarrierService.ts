import { Injectable } from '@angular/core';
import { CarrierModel } from './CarrierModel';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarrierService {   
    BaseUrl = 'http://localhost:52983/api/BookApi/GetCarrierByBookId/';
    carrierModelItems: string[] = [];
   //uzyj automappera i wyslij tylko stringi z bazy tj. nosniki bez id(ale po id wyszukaj)
    constructor(private _http: Http) { }

    getCarrier(id: number): Observable<string[]> {
        return this._http.get(this.BaseUrl + id)
            .map(this.extractData);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }
    }