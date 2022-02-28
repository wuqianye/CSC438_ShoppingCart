import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ItemsInterface } from '../items.interface';
import { ItemsService } from '../items.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  loadItem: ItemsInterface;

  constructor(
    private activeRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private router: Router,
    private itemsService: ItemsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('itemId')) {
        return;
      } else {
        const itemId = paramMap.get('itemId');
        this.loadItem = this.itemsService.getItem(itemId);
      }
    });
  }

  onAddCartItem() {
    this.cartService.addItem(this.loadItem.id, this.loadItem.title, this.loadItem.imgUrl, this.loadItem.price);
    this.alertCtrl
      .create({
        header: 'Item Added to Cart.',
        buttons: [
          {
            text: 'Ok',
            role: 'ok'
          },
          {
            text: 'Cart',
            handler: () => {
              this.router.navigate(['/items/cart']);
            }
          }
        ]
      })
      .then(alertEl => {
        alertEl.present();
      });
  }

}
