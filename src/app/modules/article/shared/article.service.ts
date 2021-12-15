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
              title,
              
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

  searchHeroes({ fetchPolicy }: { fetchPolicy: WatchQueryFetchPolicy }): Observable<Article[]> {
    return this.apollo
    .watchQuery({
      query: gql`
        query GetFeed {
          searchHeroes(
            query: ""
            after: ""
            first: 10
            orderBy: {
              direction: desc
              field: usersVoted
            }
            skip: 0
          ) {
            edges {
              cursor
              node {
                id
                realName
                alterEgo
                image
                published
                usersVoted {
                  firstname
                }
              }
            }
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              startCursor
            }
            totalCount
          }
        }
      `,
      fetchPolicy
    })
    .valueChanges.pipe(map((result: any) => result.data.searchHeroes.edges.map((edge: any) => new Article(edge.node))));
  }
}
