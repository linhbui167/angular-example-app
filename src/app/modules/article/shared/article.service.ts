import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Article } from './article.model';
import { Apollo, gql } from 'apollo-angular';
import { WatchQueryFetchPolicy } from '@apollo/client/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private apollo: Apollo) {
  }

  fetchArticles( payload: { pageNumber: any; } ): Observable<Article[]> {
    const { pageNumber } = payload
    return this.apollo
      .watchQuery({
        query: gql `
          {
            articles(pageNumber:${pageNumber || 1}) {
              url,
              title,
              subtitle,
              content,
              description,
              coverImageUrl,
            }
          }
        ` ,
        fetchPolicy: 'no-cache'
      })
      .valueChanges.pipe(map((result: any) => {
        return result.data.articles.map((item: any) => {
          return new Article(item)
        })
      }))
  }

  fetchArticleDetail(articleUrlEncoded: string) {
    const articleUrl = atob(articleUrlEncoded)
    console.log(articleUrl)
    return this.apollo
      .watchQuery({
        query: gql `
          {
            article(url:"${articleUrl}") {
              url,
              title,
              subtitle,
              content,
              description,
              coverImageUrl,
            }
          }
        ` ,
        fetchPolicy: 'no-cache'
      })
      .valueChanges.pipe(map((result: any) => {
        return new Article(result.data.article)
      }))
  }

}
