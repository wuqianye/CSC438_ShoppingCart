import { Component, OnInit } from '@angular/core';
import { ItemsInterface } from '../items.interface';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartItems: ItemsInterface[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getAllItems();
  }

}
