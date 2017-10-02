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
var BookOverlapCategory = (function () {
    function BookOverlapCategory() {
        this.selectedItem = '';
        this.ClickCategory = new core_1.EventEmitter();
    }
    BookOverlapCategory.prototype.getBooks = function (value) {
        this.selectedItem = value;
        this.ClickCategory.emit(this.selectedItem);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BookOverlapCategory.prototype, "selectedItem", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], BookOverlapCategory.prototype, "ClickCategory", void 0);
    BookOverlapCategory = __decorate([
        core_1.Component({
            selector: 'BookOverlapCategory',
            templateUrl: "app/Book/BookOverlapCategory.html",
        })
    ], BookOverlapCategory);
    return BookOverlapCategory;
}());
exports.BookOverlapCategory = BookOverlapCategory;
//# sourceMappingURL=BookOverlapCategory.component.js.map