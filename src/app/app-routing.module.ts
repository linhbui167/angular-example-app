import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConfig } from './configs/routes.config';

const routes: Routes = [
  { path: RoutesConfig.basePaths.article, loadChildren: () => import('./modules/article/article.module').then(m => m.ArticleModule) },
  { path: '**', redirectTo: RoutesConfig.routes.error404 }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
