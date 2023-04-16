import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LocationCardComponent } from './location-card/location-card.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ServceCardComponent } from './servce-card/servce-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    LocationCardComponent,
    IntroductionComponent,
    SearchbarComponent,
    ServceCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
