import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoadingPlaceholderComponent } from './components/loading-placeholder/loading-placeholder.component';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    LazyLoadImageModule,
  ],
  declarations: [
    SpinnerComponent,
    LoadingPlaceholderComponent,
    CapitalizeFirstPipe,
    ArticleCardComponent,
    InfiniteScrollComponent,
    BackToTopComponent,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    SpinnerComponent,
    LoadingPlaceholderComponent,
    CapitalizeFirstPipe,
    LazyLoadImageModule,
    ArticleCardComponent,
    InfiniteScrollComponent,
    BackToTopComponent,
  ],
})
export class SharedModule {}
