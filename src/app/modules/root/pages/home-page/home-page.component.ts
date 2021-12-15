import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../../article/shared/article.model';
import { ArticleService } from '../../../article/shared/article.service';
import { EventsService, EventsTypes } from '../../../core/services/events.servide';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
  articles: Array<Article>;
  constructor(private articleService: ArticleService) {
    this.articles = []
    // @ts-ignore
    if (window.Cypress) {
      // @ts-ignore
      window.HomePageComponent = this
    }
  }

  ngOnInit() {
    this.articleService.fetchArticles({ pageNumber: 1 }).subscribe((articles: Article[]) => {
      this.articles = articles
      console.log(this.articles)
    })


    // this.eventsService.events$.subscribe((event) => {
    //   if (event.type === EventsTypes.UPDATE_HEROES) {
    //     this.heroes$ = this.heroService.searchHeroes({ fetchPolicy: 'no-cache' });
    //   }
    // })
  }
}
