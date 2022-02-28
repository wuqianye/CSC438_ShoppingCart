import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  },
  {
    path: 'items',
    children: [
      {
        path: '',
        loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./items/cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: ':itemId',
        loadChildren: () => import('./items/item-detail/item-detail.module').then(m => m.ItemDetailPageModule)
      }
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
