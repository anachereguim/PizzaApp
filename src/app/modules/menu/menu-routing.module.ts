import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { CardapioComponent } from './cardapio/cardapio.component';

const routes: Routes = [
  {
    path: 'cardapio/:id',
    component: EditarComponent
  },
  {
    path: 'cardapio',
    component: CardapioComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
