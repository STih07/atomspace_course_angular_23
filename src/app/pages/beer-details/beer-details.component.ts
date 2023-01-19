import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BeerService} from "../../services/beer.service";

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss']
})
export class BeerDetailsComponent implements OnInit {

  id!: string;

  details: any;

  constructor(
    private route: ActivatedRoute,
    private beerService: BeerService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.beerService.getBeerById(this.id).subscribe(details => this.details = details[0]);
  }

}
