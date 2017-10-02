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
var BookService_1 = require("./Book/BookService");
var CarrierService_1 = require("./ShoppingCard/Carrier/CarrierService");
var ShoppingCardService_1 = require("./ShoppingCard/ShoppingCardService");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var AppComponent = (function () {
    function AppComponent(_BookService, _CarrierService, _ShoppingCartService, _builder) {
        this._BookService = _BookService;
        this._CarrierService = _CarrierService;
        this._ShoppingCartService = _ShoppingCartService;
        this.ShopItemShow = true;
        this.CartItemForm = false;
        this.ShopCart = false;
        this.loaded = true;
        this.ShopingCart = [];
        this.ShopingCartAmount = 0;
        this.ShopingCartTytle = "";
        this.carrierItemView = [];
        this.SelectedCategory = 'GetAllBooks';
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
        this.SelectedCategory = param;
        this.books = this._BookService.getBooksByParam(param);
    };
    AppComponent.prototype.setFilterArgs = function (val) {
        this.oldfilterargs = this.filterargs;
        this.filterargs = val;
        this.getBooks(this.SelectedCategory);
    };
    AppComponent.prototype.onSubmit = function (f) {
        var NewItem = f.value;
        NewItem.Nazwa = this.ShopingCartTytle;
        this._ShoppingCartService.AddShoppingCartItem(NewItem);
        this.ShopingCart.push(NewItem);
        this.ShopingCartAmount++;
        this.ShowAllBooks();
    };
    AppComponent.prototype.Cancel = function () {
        this.ShopItemShow = true;
        this.CartItemForm = false;
    };
    AppComponent.prototype.AddToShoppingCart = function (id, tytle) {
        var _this = this;
        this._CarrierService.getCarrier(id).subscribe(function (carrierItemView) { return _this.carrierItemView = carrierItemView; });
        console.log(this.carrierItemView);
        this.ShopingCartTytle = tytle;
        this.ShopItemShow = false;
        this.ShopCart = false;
        this.CartItemForm = true;
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
        this.ShowAllBooks();
        alert("W bazie danych nie odnaleziono produktow spelniajacych podane kryteria wyszukiwania");
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getBooks(this.SelectedCategory);
    };
    AppComponent = __decorate([
        core_1.Injectable(),
        core_1.Component({
            selector: 'my-app',
            templateUrl: "app/MainComponent.html",
            providers: [BookService_1.BookService, CarrierService_1.CarrierService, ShoppingCardService_1.ShoppingCardService]
        }),
        __metadata("design:paramtypes", [BookService_1.BookService, CarrierService_1.CarrierService,
            ShoppingCardService_1.ShoppingCardService, forms_1.FormBuilder])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map