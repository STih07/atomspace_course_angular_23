import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BeersCatalogComponent } from './pages/beers-catalog/beers-catalog.component';
import { BeerDetailsComponent } from './pages/beer-details/beer-details.component';
import {RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {HttpClientModule} from "@angular/common/http";
import { BeerCardComponent } from './pages/beers-catalog/beer-card/beer-card.component';
import { HeaderComponent } from './components/header/header.component';
import { MultiplierPipe } from './pipes/multiplier.pipe';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'catalog' },
  { path: 'catalog', component: BeersCatalogComponent },
  { path: 'catalog/:id', component: BeerDetailsComponent },
  { path: '**', component: NotFoundComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    BeersCatalogComponent,
    BeerDetailsComponent,
    NotFoundComponent,
    BeerCardComponent,
    HeaderComponent,
    MultiplierPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
