import { Component, OnInit, Injectable } from '@angular/core';
import { BookService } from './BookService';
import { Book } from './Book';
import { carrier } from './carrier';
import { ShopingCartItem } from './ShopingCartItem';
import { Subscription } from 'rxjs';
import { FilterBook } from './Filter';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Injectable()
@Component({
    selector: 'my-app',
    template: `<header>
    <div class="tytulowy">
        <div class="tytul">Ksiegarnia Internetowa</div><br>
        <div class="podtytul">Nasze sklepy prowadzimy z pasja!</div>
    </div>
    <div class="wyszukiwarka">Wyszukiwarka 
<input #Input type="text" placeholder="Wyszukaj">
<button type="submit" (click)="set(Input.value)" keyup.enter="set(Input.value)">Szukaj</button></div>
    <div class="TwojKoszykTekst" (click)="ShowShoppingCart()">Twoj koszyk:</div>
   
    <div class="TwojKoszyk">Liczba produktow: {{ShopingCartAmount}}</div>
</header>
<section>
    <div class="section1tytul">Katalog ksiazek</div>
<div *ngIf="ShopItemShow"> 
    <table class="table1">
                <tr>
                <th><a href="#" (click)="getBooks(1)"> Wszystkie</a></th>
                <th><a href="#" (click)="getBooks(2)"> Audiobooki</a></th>
                <th><a href="#" (click)="getBooks(3)"> E-book</a></th>
                <th><a href="#" (click)="getBooks(4)"> Nowosci</a></th>
                <th><a href="#" (click)="getBooks(5)"> Zapowiedzi</a></th>
                <th><a href="#" (click)="getBooks(6)"> Super Okazje</a></th>
               <tr></table>                         
        <table class="table2">
        <tr>
            <th>Nazwa</th>
            <th>Data wydania</th>
            <th>Cena</th>
            <th>Autor</th>
            <th>Wydawnictwo</th>
            <th></th>
        </tr>                 
        <tr *ngFor="let Book of books | FilterBook:filterargs">          
        <td>{{Book.Nazwa}}</td>
        <td>{{Book.DataWydania}}</td>
        <td>{{Book.Cena}}</td>
        <td>{{Book.Autor}}</td>
        <td>{{Book.Wydawnictwo}}</td>
        <td class="DodajDoKoszykaLink" *ngIf="(books | FilterBook:filterargs).length>0" (click)="AddFormShow(Book.Id, Book.Nazwa)">do koszyka</td>
        </tr><tr *ngIf="(books | FilterBook:filterargs).length===0"><td colspan="8" [ngInit]="Alert()">Brak wynikow!</td></tr> 
        </table>             
        </div> 
        
        <div *ngIf="CartItemForm" style="text-align: center;">
        <form class="ShopingForm" [formGroup]="CartItems" (ngSubmit)="onSubmit(CartItems)">
            <label class="FormLabel"><span class="FormLabelSpan">Tytul: </span>
                <input style="width: 200px; height: 30px" type="text" formControlName="Nazwa" placeholder={{ShopingCartTytle}} value='ShopingCartTytle' readonly></label><br>
            
            <label class="FormLabel"><span class="FormLabelSpan">Nosnik: </span>
                <select formControlName="Nosnik" style="clear:both; width: 200px; height: 30px; text-align:left; margin-left: 0px;">
                <option *ngFor="let item of carrierItemView" [value]="item">{{item}}</option>
                </select></label> <p *ngIf="CartItems.get('Nosnik').dirty &&
            CartItems.get('Nosnik').hasError('required')">Wybierz rodzaj nosnika!</p><br>
           
            <label class="FormLabel" ><span style="margin-right: 6px; text-align: right;">Ilosc: </span>
                <input style="width: 200px; height: 30px" type="number" value=1 formControlName="Ilosc"></label><p *ngIf="CartItems.get('Ilosc').dirty &&
                CartItems.get('Ilosc').hasError('required')">Wprowadz ilosc!</p><p *ngIf="CartItems.errors?.outsideRange && CartItems.get('Ilosc').dirty">Podaj ilosc z przedzialu 1-999!</p><br>
           
           <button [disabled]="CartItems.invalid"type="submit" keyup.enter="onSubmit(CartItems)">Ok</button>
           <button (click)="Cancel()">Anuluj</button>
    </form></div>
<div *ngIf="ShopCart">
<br>
<table class="table2"><tr><th>Tytul</th><th>Typ nosnika</th><th>Ilosc</th></tr>
    <tr *ngFor="let item of ShopingCart"><td>{{item.Nazwa}}</td><td>{{item.Nosnik}}</td><td>{{item.Ilosc}}</td></tr>
    </table>
</div></section>`,
    providers: [BookService]
})
export class AppComponent {
    
    ShopItemShow: boolean = true;
    CartItemForm: boolean = false;
    ShopCart: boolean = false;
    loaded: boolean = true;
    ShopingCart: ShopingCartItem[] = [];
    ShopingCartAmount: number = 0;
    ShopingCartTytle: string ="";

    carrierItem: carrier={ Id: 1, CD:true, DVD:true, PenDrive:true, ksiazka:null};
    carrierItemView: string[] = [];
    CD: string = "CD";
    DVD: string = "DVD";
    PenDrive: string = "PenDrive";
    selectedItem: number = 1;

    books: Book[] = [];
    filterargs :string="";
    oldfilterargs :string="";

    public CartItems: FormGroup;   
    constructor(private _BookService: BookService, _builder: FormBuilder) {
        this.CartItems = _builder.group({
            Nazwa: [''],
            Nosnik: ['', Validators.required],
            Ilosc: [, Validators.required],
        }, {
                validator: this.ValidatorRange.bind(this)
            });
    }

    getBooks(param: number) {
        this.selectedItem = param;
        if (param === 1) this._BookService.getData().subscribe(books => this.books = books);
        else if (param === 2) this._BookService.getAudiobook().subscribe(books => this.books = books);
        else if (param === 3) this._BookService.getEbook().subscribe(books => this.books = books);
        else if (param === 4) this._BookService.getNews().subscribe(books => this.books = books);
        else if (param === 5) this._BookService.getPreviews().subscribe(books => this.books = books);
        else if (param === 6) { this._BookService.getOpportunitys().subscribe(books => this.books = books); console.log("kliknieto w super okazje") }
        else 
            this.books = null;        
    }
    getCarrier(param: number)
    {
        this._BookService.getCarrier(param).subscribe(carrier => this.carrierItem = carrier)
    }
    set(val: string) {
        this.oldfilterargs = this.filterargs;      
        this.filterargs = val;
        this.getBooks(this.selectedItem);      
    }

    onSubmit(f: FormGroup)
    {
        var NewItem = f.value;
        NewItem.Nazwa = this.ShopingCartTytle;
        console.log(NewItem);
        this.ShopingCart.push(NewItem);
        this.ShopingCartAmount++;
        this.ShowAllBooks();
    }
    Cancel()
    {
        this.ShopItemShow = true;
        this.CartItemForm = false;
    }
    AddFormShow(id:number, tytle:string)
    {
        this.getCarrier(id);
        this.ShopingCartTytle = tytle;
        this.ShopItemShow = false;
        this.ShopCart = false;
        this.DeserializeCarrier(); 
        this.CartItemForm = true;
    }
    DeserializeCarrier()
    {
        if (this.carrierItem.CD == true) this.carrierItemView.indexOf(this.CD) === -1 ? this.carrierItemView.push(this.CD) : null;
        if (this.carrierItem.DVD == true) this.carrierItemView.indexOf(this.DVD) === -1 ? this.carrierItemView.push(this.DVD): null;
        if (this.carrierItem.PenDrive == true) this.carrierItemView.indexOf(this.PenDrive) ===-1 ? this.carrierItemView.push(this.PenDrive): null;
    }
    ValidatorRange(group: FormGroup)
    {      
        if (group.value.Ilosc < 1 || group.value.Ilosc > 999 || !Number.isInteger(group.value.Ilosc))
            return { outsideRange: true }    
    }
    ShowShoppingCart()
    {
        this.ShopItemShow = false;
        this.CartItemForm = false;
        this.ShopCart = true;
    }
    ShowAllBooks()
    {
        this.ShopItemShow = true;
        this.CartItemForm = false;
        this.ShopCart = false;
    }
    Alert()
    {
        this.set(this.oldfilterargs);
        this.ShowAllBooks();
        alert("W bazie danych nie odnaleziono produktow spelniajacych podane kryteria wyszukiwania");
    }
    ngOnInit() {
        this.getBooks(this.selectedItem);          
    }
}