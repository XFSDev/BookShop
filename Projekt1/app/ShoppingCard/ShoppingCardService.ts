import { ShoppingCardModel } from './ShoppingCardModel';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCardService {

    ShoppingCard: ShoppingCardModel[] = [];
    ShoppingCartAmount: number = 0;
    AddShoppingCartItem(item: ShoppingCardModel)
    {
        this.ShoppingCard.push(item); 
    }

}