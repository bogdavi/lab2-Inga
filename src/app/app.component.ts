import { Component } from '@angular/core';
import { NewsDataService } from './Services/news-mock-data.service';
import { News } from './Classes/News';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NewsDataService]
})
export class AppComponent {
  title = 'tempogram';

  news: News[] = [];

  constructor(private newsDataService: NewsDataService) { }

  ngOnInit() {
    this.news = this.newsDataService.getData();
  }

}
