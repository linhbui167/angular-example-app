import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailPageComponent } from './pages/article-detail-page.component';
import { RoutesConfig } from '../../configs/routes.config';
import { AuthGuard } from '../auth/auth.guard';

const heroRoutes = RoutesConfig.routesNames.hero;

const heroesRoutes: Routes = [
  {
    path: heroRoutes.detail,
    component: ArticleDetailPageComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})

export class ArticleRoutingModule {
}