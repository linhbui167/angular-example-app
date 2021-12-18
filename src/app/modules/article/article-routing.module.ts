import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailPageComponent } from './pages/article-detail-page.component';
import { RoutesConfig } from '../../configs/routes.config';

const articleRoutes = RoutesConfig.routesNames.article;

const routeList: Routes = [
  {
    path: articleRoutes.detail,
    component: ArticleDetailPageComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routeList)
  ],
  exports: [
    RouterModule
  ],

})

export class ArticleRoutingModule {
}