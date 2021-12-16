import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleDetailPageComponent } from './pages/article-detail-page.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ArticleRoutingModule
  ],
  declarations: [
    ArticleDetailPageComponent,
  ],
})

export class ArticleModule {
}
