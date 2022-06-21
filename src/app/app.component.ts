import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router,
    private primengConfig: PrimeNGConfig
  ) { }

  title = 'Pizza';

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  cardapio(): void {
    this.router.navigate(["/menu/cardapio"])
  }
  contato(): void{
    this.router.navigate(["/contato/contato"])
  }
  home(): void{
    this.router.navigate(["/index"])
  }
  carrinho(): void{
    this.router.navigate(["/carrinho/carrinho"])
  }
}
