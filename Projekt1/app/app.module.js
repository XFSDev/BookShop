"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var BookService_1 = require("./Book/BookService");
var BookSearch_component_1 = require("./Book/BookSearch.component");
var ShoppingCardService_1 = require("./ShoppingCard/ShoppingCardService");
var Filter_1 = require("./Filter");
var CarrierService_1 = require("./ShoppingCard/Carrier/CarrierService");
var forms_1 = require("@angular/forms");
var NgInit_1 = require("./NgInit");
var BookOverlapCategory_component_1 = require("./Book/BookOverlapCategory.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [app_component_1.AppComponent, BookSearch_component_1.BookSearchComponent, BookOverlapCategory_component_1.BookOverlapCategory, Filter_1.FilterBook, NgInit_1.NgInit],
            providers: [BookService_1.BookService, CarrierService_1.CarrierService, ShoppingCardService_1.ShoppingCardService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map