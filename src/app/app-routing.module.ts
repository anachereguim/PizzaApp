import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'carrinho',
 loadChildren: () => import('./modules/carrinho/carrinho.module').then(m => m.CarrinhoModule)

  },
  {
    path: 'contato',
 loadChildren: () => import('./modules/contato/contato.module').then(m => m.ContatoModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./modules/index/index.module').then(m => m.IndexModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./modules/menu/menu.module').then(m => m.MenuModule)
  },
   {
   path: '',
    redirectTo: '/index',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
