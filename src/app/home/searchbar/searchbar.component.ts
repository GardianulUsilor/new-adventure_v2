import { Component } from '@angular/core';
import { SCard } from 'src/app/models/service-card.model';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  arrayOfScards: SCard[] = [];
  searchString:string = '';
  constructor(private pageService: PageService) {
    this.arrayOfScards = this.pageService.arrayOfScards;
  }
}
