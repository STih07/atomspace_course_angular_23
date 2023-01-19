import { Component, OnInit } from '@angular/core';
import {BeerService} from "../../services/beer.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartSize$ = this.beerService.cartAmount$;

  now = new Date();

  constructor(
    private beerService: BeerService
  ) {

  }

  ngOnInit() {
    // this.beerService.cartAmount$.subscribe((newAmount) => this.cartSize = newAmount);
  }

  onClearClick() {
    this.beerService.clearCart();
  }
}
