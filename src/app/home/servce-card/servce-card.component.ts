import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SCard } from 'src/app/models/service-card.model';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-servce-card',
  templateUrl: './servce-card.component.html',
  styleUrls: ['./servce-card.component.scss']
})
export class ServceCardComponent {
  constructor (private router:Router, private pageService:PageService){}
  @Input() Scard!:SCard;
}
