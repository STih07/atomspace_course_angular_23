import { Component, OnInit } from '@angular/core';
import {BeerService} from "../../services/beer.service";

@Component({
  selector: 'app-beers-catalog',
  templateUrl: './beers-catalog.component.html',
  styleUrls: ['./beers-catalog.component.scss']
})
export class BeersCatalogComponent implements OnInit {

  constructor(
    private beerService: BeerService
  ) { }


  beers: any[] = [];

  cart: any[] = [];

  ngOnInit(): void {
    this.beerService.getBeers().subscribe(beers => this.beers = beers);
  }

  onBeerDeletion(beerId: number) {
    this.beers = this.beers.filter(beer => beer.id !== beerId);
  }

  onAddToCard(beer: any) {
    // добавляет в корзину
  }
}
