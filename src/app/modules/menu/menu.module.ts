import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardapioComponent } from './cardapio/cardapio.component';
import { MenuRoutingModule } from './menu-routing.module';
import { EditarComponent } from './editar/editar.component';
import { FormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    CardapioComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule,
    CardModule,
    ButtonModule,
		TabViewModule
  ]
})
export class MenuModule { }
