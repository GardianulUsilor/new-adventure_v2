import { Component } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {
  clickedCard!:Card;
  titleText = 'New Adventure';
  constructor(private pageService: PageService){
    this.pageService.cardSubject.subscribe((card:Card)=>{
      this.clickedCard = card;
      this.titleText = this.clickedCard.title;
    })
  }
  setReceivedGame(event: any) {
    this.clickedCard = event;
  }
}
