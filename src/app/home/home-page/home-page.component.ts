import { Component } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  clickedCard!:Card;
  arrayOfCards: Card[]=[];
  constructor(private pageService: PageService){
    this.pageService.cardSubject.subscribe((card:Card)=>{
      this.clickedCard = card;
    });
    this.arrayOfCards = this.pageService.arrayOfCards;
  }
  setReceivedGame(event: any) {
    this.clickedCard = event;
  }

}
