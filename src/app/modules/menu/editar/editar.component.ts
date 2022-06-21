import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaService } from '../../../core/services/pizza.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Ingredients } from 'src/app/models/ingredient.model';
import { Router } from '@angular/router';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  pizzas!: Pizza[];
  ingredientsList!: Ingredients[];



  pizza: Pizza = {
    name: '',
    ingredients: '',

  };

  selectedItemsList!: any[];
  selectedIng!: any[];


  constructor(
    private route: ActivatedRoute,
    private service: PizzaService,
    private location: Location,
    private router: Router,
    private card: CardModule
  ) { }

  ngOnInit(): void {
    this.getPizzas();
   // this.fetchSelectedItems();
    this.getIngredients();

  }
  changeSelection() {
    let inputArray= document.getElementsByTagName('input')

  }
  getPizzas(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== undefined && id !== null){
       this.service.getById(parseInt(id)).subscribe(data => this.pizza = data);
    }
  }
  getIngredients(): void {
    this.service.getAllIngredients().subscribe(ingredients => {
      this.ingredientsList = ingredients;
    });
  }
  save(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== null && id !== undefined){
      this.service.update(this.pizza, parseInt(id,10)).subscribe(() => {
      window.alert('Salvo com sucesso!');

    });
    }
  }

  goBack(): void {
    this.location.back();
  }
  fetchSelectedItems() {
    this.selectedItemsList = this.ingredientsList.filter((value, index) => value.isChecked);
  }

  carrinho(): void{
  this.router.navigate(["/carrinho/carrinho"])
}
}
