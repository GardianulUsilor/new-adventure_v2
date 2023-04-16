import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Card } from '../models/card.model';
import { SCard } from '../models/service-card.model';

@Injectable({ providedIn: 'root' })
export class PageService {
  private clickedCard!: Card;
  cardSubject = new Subject<Card>();
  arrayOfCards: Card[] = [
    {
      title: 'Kuta',
      imageUrl:
        'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      description: 'Tropical city',
    },
    {
      title: 'Papeette',
      imageUrl:
        'https://media.istockphoto.com/id/1325734740/ro/fotografie/vacan%C8%9B%C4%83-de-lux-de-c%C4%83l%C4%83torie-aerian%C4%83-de-bungalouri-overwater-sta%C8%9Biune-%C3%AEn-recif-de-corali.jpg?s=612x612&w=0&k=20&c=bCFYkhO3gCejpG31vcjGArF4jBzQGWg4i4QiFeOAWNM=',
      description: 'Sunny oasis for you',
    },
    {
      title: 'Budapest',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1680721310286-1aa12c5f757b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVkYXBlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
      description: 'Cultural city with nice river in it',
    },
    {
      title: 'Tuvalu',
      imageUrl:
        'https://media.istockphoto.com/id/174845869/ro/fotografie/plaja-paradise.jpg?s=612x612&w=0&k=20&c=lnf_ooU1UeQEfmwhdGqQO3xGzuiECT0XITBeXdolnrI=',
      description: 'Good thing come in small quantities',
    },
    {
      title: 'Iceland',
      imageUrl:
        'https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGljZWxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
      description: 'Low temperature, High fun',
    },
    {
      title: 'Machu pichu',
      imageUrl:
        'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVydXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
      description: 'Time travel through history',
    },
  ];
  arrayOfScards: SCard[] = [
    { title: 'Travel', subtitle: 'Like no other', description: 'lorepmipssda' },
    {
      title: 'Travel arrangements ',
      subtitle: 'good service',
      description: 'lorepmipssda',
    },
    { title: 'Activities', subtitle: 'FUN', description: 'fdaoknfdofnfsokfdw' },
    { title: 'Guides', subtitle: 'Tour', description: 'cfdsnofdsnwdojdnvokdv' },
  ];
  constructor() {}

  clickedCardInService(card: Card) {
    this.clickedCard = card;
  }
  savedCardToService(card: Card) {
    this.clickedCard = card;
  }
  get getClickedCard() {
    return this.clickedCard;
  }
  flagCard(card: Card) {
    this.cardSubject.next(card);
  }
}
