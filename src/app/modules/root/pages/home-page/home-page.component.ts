import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../../article/shared/article.model';
import { ArticleService } from '../../../article/shared/article.service';
import { EventsService, EventsTypes } from '../../../core/services/events.servide';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  articles: Array<Article>;
  pageNumber: number;
  isLoading: Boolean;
  isGridView: Boolean;
  placeHolderList: Array<String>;
  constructor(private articleService: ArticleService) {
    this.articles = [];
    this.placeHolderList = new Array(4).fill('');
    this.pageNumber = 1;
    this.isGridView = true;
    this.isLoading = false;
  }

  ngOnInit() {
    this.fetchArticle();
  }

  fetchArticle() {
    if (this.isLoading) return;
    this.isLoading = true;
    this.articleService
      .fetchArticles({ pageNumber: this.pageNumber })
      .subscribe((articles: Article[]) => {
        this.articles = this.articles.concat(articles);
        this.isLoading = false;
        this.pageNumber = this.pageNumber + 1;
        console.log(this.pageNumber);
      });
  }

  switchView() {
    this.isGridView = !this.isGridView;
  }

  onScrollingFinished() {
    this.fetchArticle();
  }
}
