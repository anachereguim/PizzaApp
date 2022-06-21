import { Component, OnInit } from '@angular/core';
import {Pizza} from '../../../models/pizza.model';
import { PizzaService } from '../../../core/services/pizza.service';
import { Router } from '@angular/router';
import { Img } from 'src/app/models/img.model';
import { PhotoService } from 'src/app/core/services/photo.service';


@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {
  img!: Img[];

    responsiveOptions:any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

  pizzas!: Pizza[]

  constructor(
    private service: PizzaService,
    private router: Router,
    private imgService: PhotoService


    ) { }

  ngOnInit(): void {
    this.imgService.getAllimg().subscribe(images => this.img = images)
  }

}
