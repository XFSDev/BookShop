"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BookService_1 = require("./BookService");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var AppComponent = (function () {
    function AppComponent(_BookService, _builder) {
        this._BookService = _BookService;
        this.ShopItemShow = true;
        this.CartItemForm = false;
        this.ShopCart = false;
        this.loaded = true;
        this.ShopingCart = [];
        this.ShopingCartAmount = 0;
        this.ShopingCartTytle = "";
        this.carrierItem = { Id: 1, CD: true, DVD: true, PenDrive: true, ksiazka: null };
        this.carrierItemView = [];
        this.CD = "CD";
        this.DVD = "DVD";
        this.PenDrive = "PenDrive";
        this.selectedItem = 1;
        this.books = [];
        this.filterargs = "";
        this.oldfilterargs = "";
        this.CartItems = _builder.group({
            Nazwa: [''],
            Nosnik: ['', forms_2.Validators.required],
            Ilosc: [, forms_2.Validators.required],
        }, {
            validator: this.ValidatorRange.bind(this)
        });
    }
    AppComponent.prototype.getBooks = function (param) {
        var _this = this;
        this.selectedItem = param;
        if (param === 1)
            this._BookService.getData().subscribe(function (books) { return _this.books = books; });
        else if (param === 2)
            this._BookService.getAudiobook().subscribe(function (books) { return _this.books = books; });
        else if (param === 3)
            this._BookService.getEbook().subscribe(function (books) { return _this.books = books; });
        else if (param === 4)
            this._BookService.getNews().subscribe(function (books) { return _this.books = books; });
        else if (param === 5)
            this._BookService.getPreviews().subscribe(function (books) { return _this.books = books; });
        else if (param === 6) {
            this._BookService.getOpportunitys().subscribe(function (books) { return _this.books = books; });
            console.log("kliknieto w super okazje");
        }
        else
            this.books = null;
    };
    AppComponent.prototype.getCarrier = function (param) {
        var _this = this;
        this._BookService.getCarrier(param).subscribe(function (carrier) { return _this.carrierItem = carrier; });
    };
    AppComponent.prototype.set = function (val) {
        this.oldfilterargs = this.filterargs;
        this.filterargs = val;
        this.getBooks(this.selectedItem);
    };
    AppComponent.prototype.onSubmit = function (f) {
        var NewItem = f.value;
        NewItem.Nazwa = this.ShopingCartTytle;
        console.log(NewItem);
        this.ShopingCart.push(NewItem);
        this.ShopingCartAmount++;
        this.ShowAllBooks();
    };
    AppComponent.prototype.Cancel = function () {
        this.ShopItemShow = true;
        this.CartItemForm = false;
    };
    AppComponent.prototype.AddFormShow = function (id, tytle) {
        this.getCarrier(id);
        this.ShopingCartTytle = tytle;
        this.ShopItemShow = false;
        this.ShopCart = false;
        this.DeserializeCarrier();
        this.CartItemForm = true;
    };
    AppComponent.prototype.DeserializeCarrier = function () {
        if (this.carrierItem.CD == true)
            this.carrierItemView.indexOf(this.CD) === -1 ? this.carrierItemView.push(this.CD) : null;
        if (this.carrierItem.DVD == true)
            this.carrierItemView.indexOf(this.DVD) === -1 ? this.carrierItemView.push(this.DVD) : null;
        if (this.carrierItem.PenDrive == true)
            this.carrierItemView.indexOf(this.PenDrive) === -1 ? this.carrierItemView.push(this.PenDrive) : null;
    };
    AppComponent.prototype.ValidatorRange = function (group) {
        if (group.value.Ilosc < 1 || group.value.Ilosc > 999 || !Number.isInteger(group.value.Ilosc))
            return { outsideRange: true };
    };
    AppComponent.prototype.ShowShoppingCart = function () {
        this.ShopItemShow = false;
        this.CartItemForm = false;
        this.ShopCart = true;
    };
    AppComponent.prototype.ShowAllBooks = function () {
        this.ShopItemShow = true;
        this.CartItemForm = false;
        this.ShopCart = false;
    };
    AppComponent.prototype.Alert = function () {
        this.set(this.oldfilterargs);
        this.ShowAllBooks();
        alert("W bazie danych nie odnaleziono produktow spelniajacych podane kryteria wyszukiwania");
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getBooks(this.selectedItem);
    };
    AppComponent = __decorate([
        core_1.Injectable(),
        core_1.Component({
            selector: 'my-app',
            template: "<header>\n    <div class=\"tytulowy\">\n        <div class=\"tytul\">Ksiegarnia Internetowa</div><br>\n        <div class=\"podtytul\">Nasze sklepy prowadzimy z pasja!</div>\n    </div>\n    <div class=\"wyszukiwarka\">Wyszukiwarka \n<input #Input type=\"text\" placeholder=\"Wyszukaj\">\n<button type=\"submit\" (click)=\"set(Input.value)\" keyup.enter=\"set(Input.value)\">Szukaj</button></div>\n    <div class=\"TwojKoszykTekst\" (click)=\"ShowShoppingCart()\">Twoj koszyk:</div>\n   \n    <div class=\"TwojKoszyk\">Liczba produktow: {{ShopingCartAmount}}</div>\n</header>\n<section>\n    <div class=\"section1tytul\">Katalog ksiazek</div>\n<div *ngIf=\"ShopItemShow\"> \n    <table class=\"table1\">\n                <tr>\n                <th><a href=\"#\" (click)=\"getBooks(1)\"> Wszystkie</a></th>\n                <th><a href=\"#\" (click)=\"getBooks(2)\"> Audiobooki</a></th>\n                <th><a href=\"#\" (click)=\"getBooks(3)\"> E-book</a></th>\n                <th><a href=\"#\" (click)=\"getBooks(4)\"> Nowosci</a></th>\n                <th><a href=\"#\" (click)=\"getBooks(5)\"> Zapowiedzi</a></th>\n                <th><a href=\"#\" (click)=\"getBooks(6)\"> Super Okazje</a></th>\n               <tr></table>                         \n        <table class=\"table2\">\n        <tr>\n            <th>Nazwa</th>\n            <th>Data wydania</th>\n            <th>Cena</th>\n            <th>Autor</th>\n            <th>Wydawnictwo</th>\n            <th></th>\n        </tr>                 \n        <tr *ngFor=\"let Book of books | FilterBook:filterargs\">          \n        <td>{{Book.Nazwa}}</td>\n        <td>{{Book.DataWydania}}</td>\n        <td>{{Book.Cena}}</td>\n        <td>{{Book.Autor}}</td>\n        <td>{{Book.Wydawnictwo}}</td>\n        <td class=\"DodajDoKoszykaLink\" *ngIf=\"(books | FilterBook:filterargs).length>0\" (click)=\"AddFormShow(Book.Id, Book.Nazwa)\">do koszyka</td>\n        </tr><tr *ngIf=\"(books | FilterBook:filterargs).length===0\"><td colspan=\"8\" [ngInit]=\"Alert()\">Brak wynikow!</td></tr> \n        </table>             \n        </div> \n        \n        <div *ngIf=\"CartItemForm\" style=\"text-align: center;\">\n        <form class=\"ShopingForm\" [formGroup]=\"CartItems\" (ngSubmit)=\"onSubmit(CartItems)\">\n            <label class=\"FormLabel\"><span style=\"margin-right: 6px; text-align: right;\">Tytul: </span>\n                <input style=\"width: 200px; height: 30px\" type=\"text\" formControlName=\"Nazwa\" placeholder={{ShopingCartTytle}} value='ShopingCartTytle' readonly></label><br>\n            \n            <label class=\"FormLabel\"><span style=\"margin-right: 6px; text-align: right;\">Nosnik: </span>\n                <select formControlName=\"Nosnik\" style=\"clear:both; width: 200px; height: 30px; text-align:left; margin-left: 0px;\">\n                <option *ngFor=\"let item of carrierItemView\" [value]=\"item\">{{item}}</option>\n                </select></label> <p *ngIf=\"CartItems.get('Nosnik').dirty &&\n            CartItems.get('Nosnik').hasError('required')\">Wybierz rodzaj nosnika!</p><br>\n           \n            <label class=\"FormLabel\" ><span style=\"margin-right: 6px; text-align: right;\">Ilosc: </span>\n                <input style=\"width: 200px; height: 30px\" type=\"number\" value=1 formControlName=\"Ilosc\"></label><p *ngIf=\"CartItems.get('Ilosc').dirty &&\n                CartItems.get('Ilosc').hasError('required')\">Wprowadz ilosc!</p><p *ngIf=\"CartItems.errors?.outsideRange && CartItems.get('Ilosc').dirty\">Podaj ilosc z przedzialu 1-999!</p><br>\n           \n           <button [disabled]=\"CartItems.invalid\"type=\"submit\" keyup.enter=\"onSubmit(CartItems)\">Ok</button>\n           <button (click)=\"Cancel()\">Anuluj</button>\n    </form></div>\n<div *ngIf=\"ShopCart\">\n<br>\n<table class=\"table2\"><tr><th>Tytul</th><th>Typ nosnika</th><th>Ilosc</th></tr>\n    <tr *ngFor=\"let item of ShopingCart\"><td>{{item.Nazwa}}</td><td>{{item.Nosnik}}</td><td>{{item.Ilosc}}</td></tr>\n    </table>\n</div></section>",
            providers: [BookService_1.BookService]
        }),
        __metadata("design:paramtypes", [BookService_1.BookService, forms_1.FormBuilder])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map