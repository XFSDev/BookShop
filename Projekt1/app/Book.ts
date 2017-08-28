import { carrier } from "./carrier";

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
    Nosnik: carrier         
}