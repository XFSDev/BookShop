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
var table1 = (function () {
    function table1() {
        this.selectedItem = 1;
        this.Click = new core_1.EventEmitter();
    }
    table1.prototype.thClicked = function (value) {
        this.selectedItem = value;
        this.Click.emit(this.selectedItem);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], table1.prototype, "selectedItem", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], table1.prototype, "Click", void 0);
    table1 = __decorate([
        core_1.Component({
            selector: 't',
            template: "<table class=\"table1\">\n                <tr>\n                <th><a href=\"#\" (click)=\"thClicked(1)\"> Wszystkie</a></th>\n                <th><a href=\"#\" (click)=\"thClicked(2)\"> Audiobooki</a></th>\n                <th><a href=\"#\" (click)=\"thClicked(3)\"> E-book</a></th>\n                <th><a href=\"#\" (click)=\"thClicked(4)\"> Nowo\u015Bci</a></th>\n                <th><a href=\"#\" (click)=\"thClicked(5)\"> Zapowiedzi</a></th>\n                <th><a href=\"#\" (click)=\"thClicked(6)\"> Super Okazje</a></th>\n               <tr></table>\n               ",
        })
    ], table1);
    return table1;
}());
exports.table1 = table1;
//# sourceMappingURL=table1.js.map