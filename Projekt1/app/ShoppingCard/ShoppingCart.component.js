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
var ShoppingCartService_1 = require("./ShoppingCartService");
var BookOverlapCategory = (function () {
    function BookOverlapCategory(_ShoppingCartService) {
        this._ShoppingCartService = _ShoppingCartService;
        this.ShopingCart = [];
        this.ShopingCart = _ShoppingCartService.ShopingCart;
    }
    BookOverlapCategory = __decorate([
        core_1.Injectable(),
        core_1.Component({
            selector: 'ShoppingCart',
            template: "app/ShoppingCart/ShoppingCart.html",
        }),
        __metadata("design:paramtypes", [ShoppingCartService_1.ShoppingCartService])
    ], BookOverlapCategory);
    return BookOverlapCategory;
}());
exports.BookOverlapCategory = BookOverlapCategory;
//# sourceMappingURL=ShoppingCart.component.js.map