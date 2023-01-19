import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {Observable} from "rxjs";
import {BeerService} from "../../../services/beer.service";

@Component({
  templateUrl: `beer-card.component.html`,
  selector: 'app-beer-card',
  styleUrls: ['beer-card.component.scss'],
  preserveWhitespaces: true
})
export class BeerCardComponent {
  @Input() beer: any;
  @Output() deleteMe = new EventEmitter();


  constructor(private beerService: BeerService) {}



  onAddToCartClick() {
    this.beerService.addToCart();
  }

  onImageClick() {

    this.deleteMe.emit(this.beer.id);
  }
}
