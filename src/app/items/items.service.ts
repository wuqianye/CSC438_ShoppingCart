import { Injectable } from '@angular/core';
import { ItemsInterface } from './items.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private items: ItemsInterface[] = [
    {
      id: 'itemOne',
      title: 'Apple',
      imgUrl: 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg',
      price: 1.99,
    },
    {
      id: 'itemTwo',
      title: 'Pear',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXunP2_J3Rth2arrXXGEk0hhbSoWqNAz1nu-6_VjuHMHc9cMOlchAEhFQVWekzAL47LIo&usqp=CAU',
      price: 2.99,
    }
  ];

  constructor() { }

  getAllItems() {
    return [...this.items];
  }

  getItem(itemId: string) {
    return {...this.items.find(item => item.id === itemId)};
  }
}
