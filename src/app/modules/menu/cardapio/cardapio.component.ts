import { Component, OnInit } from '@angular/core';
import {Pizza} from '../../../models/pizza.model';
import { PizzaService } from '../../../core/services/pizza.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {
  pizzas!: Pizza[];

  pizza: Pizza = {
    name: '',
    ingredients: '',


  };
  gridColumns = 3;

  constructor(
    private route: ActivatedRoute,
    private service: PizzaService,
    private location: Location,
    private primengConfig: PrimeNGConfig

    ) { }


  ngOnInit(): void {
    this.getPizzas();
    this.primengConfig.ripple = true;
  }

  getPizzas(): void {
    this.service.getAll().subscribe(pizzas => {
      this.pizzas = pizzas
    });
  }
  goBack(): void {
    this.location.back();
  }
}
