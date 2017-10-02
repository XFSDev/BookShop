import { CarrierModel } from "./../ShoppingCard/Carrier/CarrierModel";

export interface Book {
    Id: number,
    Nazwa: string,
    DataWydania: string,
    Cena: number,
    Autor: string,
    Wydawnictwo: string,
    Audiobook: boolean,
    Ebook: boolean,
    Okazja: boolean
    Nosnik: CarrierModel         
}