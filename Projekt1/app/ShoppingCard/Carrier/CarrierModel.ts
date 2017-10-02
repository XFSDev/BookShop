import {Book} from './../../Book/BookModel'
export interface CarrierModel
{
    Id: number,
    Rodzaj: string,
    Ksiazki: Book
}