import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/article.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { ArticleService } from '../shared/article.service';
import { RoutesConfig } from '../../../configs/routes.config';

@Component({
  selector: 'app-article-detail-page',
  templateUrl: './article-detail-page.component.html',
  styleUrls: ['./article-detail-page.component.scss'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      params: { timing: 1, delay: 0 }
    }))])
  ]
})

export class ArticleDetailPageComponent implements OnInit {

  article: Article | undefined;
  isLoading: Boolean;

  constructor(private location: Location,
              private router: Router,
              private articleService: ArticleService,
              private activatedRoute: ActivatedRoute) {
    this.isLoading = true
  }

  ngOnInit() {
    const url = this.activatedRoute.snapshot.paramMap.get('id') || ''
    this.articleService.fetchArticleDetail(url)
    .subscribe((article: Article) => {
      this.article = article;
      this.isLoading = false;
      
    });
  }

  goBack(): void {
    this.location.back();
  }

  goToTheAnchor(): void {
    if (this.article) {
      this.router.navigate([RoutesConfig.routes.article.detail(this.article.url)], { fragment: 'article-detail' });
    }
  }
}
