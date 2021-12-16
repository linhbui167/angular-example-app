import { Component, Inject, Input } from '@angular/core';
import { Article } from '../../../modules/article/shared/article.model';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { ROUTES_CONFIG, RoutesConfig } from '../../../configs/routes.config';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(
        '* => *',
        useAnimation(fadeIn, {
          params: { timing: 1, delay: 0 },
        })
      ),
    ]),
  ],
})
export class ArticleCardComponent {
  @Input() incrementId: number | undefined;
  @Input() article: Article | undefined;

  constructor(@Inject(ROUTES_CONFIG) public routesConfig: any) {}
}
