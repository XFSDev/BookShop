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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/toPromise");
var core_1 = require("@angular/core");
var BookService = (function () {
    function BookService(_http) {
        this._http = _http;
        this.baseUrl = 'http://localhost:52983/api/BookApi/';
        this.UrlForGetCarrier = 'http://localhost:52983/api/BookApi/GetCarrierByBookId/';
    }
    BookService.prototype.getData = function () {
        return this._http.get(this.baseUrl + "GetAllBooks").map(this.extractData);
    };
    BookService.prototype.getAudiobook = function () {
        return this._http.get(this.baseUrl + "GetAllAudiobooks").map(this.extractData);
    };
    BookService.prototype.getEbook = function () {
        return this._http.get(this.baseUrl + "GetAllEbooks").map(this.extractData);
    };
    BookService.prototype.getNews = function () {
        return this._http.get(this.baseUrl + "GetAllNews").map(this.extractData);
    };
    BookService.prototype.getPreviews = function () {
        return this._http.get(this.baseUrl + "GetAllPreviews").map(this.extractData);
    };
    BookService.prototype.getOpportunitys = function () {
        return this._http.get(this.baseUrl + "GetAllopportunitys").map(this.extractData);
    };
    BookService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    BookService.prototype.getCarrier = function (id) {
        return this._http.get(this.UrlForGetCarrier + id)
            .map(function (response) { return response.json(); });
    };
    BookService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;
//# sourceMappingURL=BookService.js.map