import { Injectable } from '@angular/core';
import { ItemsInterface } from './items.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: ItemsInterface[] = [
    {
      id: null,
      title: 'Cart',
      imgUrl: 'https://i.pinimg.com/736x/c9/02/bf/c902bf47f7aae4f4d62c0a6a933746d7.jpg',
      price: null,
    }
  ];

  constructor() { }

  getAllItems() {
    return [...this.cartItems];
  }

  getItem(itemId: string) {
    return {...this.cartItems.find(item => item.id === itemId)};
  }

  addItem(itemId: string, itemTitle: string, itemImg: string, itemPrice: number) {
    this.cartItems.push({
      id: itemId,
      title: itemTitle,
      imgUrl: itemImg,
      price: itemPrice,
    });
  }
}
