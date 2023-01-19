import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  cartAmount$ = new BehaviorSubject<number>(+(localStorage.getItem('cartAmount') || 0));

  readonly rootUrl = `https://api.punkapi.com/v2/`;

  constructor(
    private http: HttpClient
  ) {
    this.cartAmount$.subscribe(amount => localStorage.setItem('cartAmount', '' + amount));
  }



  getBeers(): Observable<any[]> {
    return this.http.get<any[]>(this.rootUrl + 'beers');
  }


  getBeerById(id: string) {
    return this.http.get<any>(this.rootUrl + 'beers/' + id);
  }


  addToCart() {
    const currentAmount = this.cartAmount$.value;
    this.cartAmount$.next(currentAmount + 1);
  }

  clearCart() {
    this.cartAmount$.next(0);
  }
}
