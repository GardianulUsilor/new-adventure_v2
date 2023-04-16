import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent {
  constructor(private router: Router, private pageService:PageService) {}
  @Input() card!: Card;
  @Output() cardEmitter: EventEmitter<Card> = new EventEmitter<Card>();
  review: string = '';
  displayImage: boolean = true;
  cards = [1, 2, 3, 4];

  navigateToCardPage()
  {
    this.pageService.savedCardToService(this.card);
    //this.router.navigateByUrl('/cardPage');
  }
  emitCard()
  {
    this.cardEmitter.emit(this.card);
  }
  subjectEmitCard()
  {
    this.pageService.flagCard(this.card);
  }
}
