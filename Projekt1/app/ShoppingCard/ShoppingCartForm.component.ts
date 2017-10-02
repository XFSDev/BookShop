import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ShoppingCardService } from './ShoppingCardService';

@Injectable()

@Component({
    selector: 'ShoppingCardForm',
    template: `app/ShoppingCart/ShoppingCardForm.html`,
    providers: [ShoppingCardService]
})

export class ShoppingCardFormComponent {
    public CartItems: FormGroup;
    constructor(_builder: FormBuilder, _ShoppingCardService: ShoppingCardService)
    {
        this.CartItems = _builder.group({
            Nazwa: [''],
            Nosnik: ['', Validators.required],
            Ilosc: [, Validators.required],
        })
    }

    onSubmit(f: FormGroup) {
        var NewItem = f.value;
        NewItem.Nazwa = this.ShopingCartTytle;
        this._ShoppingCardService.AddShoppingCartItem(NewItem);
        this.ShopingCart.push(NewItem);
        this.ShopingCartAmount++;
        this.ShowAllBooks();
    }
}