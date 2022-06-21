import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzasComponent } from './pizzas/pizzas.component';
import { IndexRoutingModule } from './index-routing.module';
import { FormsModule } from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';


@NgModule({
  declarations: [
    PizzasComponent,

  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    FormsModule,
    GalleriaModule,

  ]
})
export class IndexModule { }
