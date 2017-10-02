import { Component, Input, OnInit, Injectable } from '@angular/core';
import { BookService } from './Book/BookService';
import { Book } from './Book/BookModel';
import { CarrierService } from './ShoppingCard/Carrier/CarrierService';
import { ShoppingCardService } from './ShoppingCard/ShoppingCardService';
import { ShoppingCardModel } from './ShoppingCard/ShoppingCardModel';
import { Subscription } from 'rxjs';
import { FilterBook } from './Filter';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Injectable()
@Component({
    selector: 'my-app',
    templateUrl: `app/MainComponent.html`,
    providers: [BookService, CarrierService, ShoppingCardService]
})
export class AppComponent {
    
    ShopItemShow: boolean = true;
    CartItemForm: boolean = false;
    ShopCart: boolean = false;
    loaded: boolean = true;

    ShopingCart: ShoppingCardModel[] = [];
    ShopingCartAmount: number = 0;
    ShopingCartTytle: string ="";
    carrierItemView: string[] = [];
   
    SelectedCategory: string = 'GetAllBooks';

    books: Book[] = [];

    filterargs :string="";
    oldfilterargs :string="";

    public CartItems: FormGroup;   
    constructor(private _BookService: BookService, private _CarrierService: CarrierService,
        private _ShoppingCartService: ShoppingCardService, _builder: FormBuilder) {
        this.CartItems = _builder.group({
            Nazwa: [''],
            Nosnik: ['', Validators.required],
            Ilosc: [, Validators.required],
        }, {
                validator: this.ValidatorRange.bind(this)
            });
    }

    getBooks(param: string) {
        this.SelectedCategory = param;
        this.books = this._BookService.getBooksByParam(param);        
    }
   
    setFilterArgs(val: string) {
        this.oldfilterargs = this.filterargs;      
        this.filterargs = val;
        this.getBooks(this.SelectedCategory);      
    }

    onSubmit(f: FormGroup)
    {
        var NewItem = f.value;
        NewItem.Nazwa = this.ShopingCartTytle; 
        this._ShoppingCartService.AddShoppingCartItem(NewItem);     
        this.ShopingCart.push(NewItem);
        this.ShopingCartAmount++;
        this.ShowAllBooks();
    }
    Cancel()
    {
        this.ShopItemShow = true;
        this.CartItemForm = false;
    }
    AddToShoppingCart(id:number, tytle:string)
    {
        this._CarrierService.getCarrier(id).subscribe(carrierItemView => this.carrierItemView = carrierItemView);
        console.log(this.carrierItemView);     
        this.ShopingCartTytle = tytle;
        this.ShopItemShow = false;
        this.ShopCart = false;      
        this.CartItemForm = true;
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
        this.ShowAllBooks();
        alert("W bazie danych nie odnaleziono produktow spelniajacych podane kryteria wyszukiwania");
    }
    ngOnInit() {
        this.getBooks(this.SelectedCategory);           
    }
}