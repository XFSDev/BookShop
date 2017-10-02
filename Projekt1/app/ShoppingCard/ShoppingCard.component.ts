import { Component, Injectable } from '@angular/core';
import { ShoppingCardService } from './ShoppingCardService';
import { ShoppingCardModel } from './ShoppingCardModel';
@Injectable()

@Component({
    selector: 'ShoppingCard',
    template: `app/ShoppingCart/ShoppingCard.html`,
})

export class ShoppingCardComponent {
    ShopingCard: ShoppingCardModel[] = [];
    constructor(private _ShoppingCardService: ShoppingCardService)
    { this.ShopingCard = _ShoppingCardService.ShoppingCard; }        
    
}