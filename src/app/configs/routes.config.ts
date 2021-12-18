import { InjectionToken } from '@angular/core';

export const ROUTES_CONFIG = new InjectionToken('routes.config');

const basePaths = {
  article: 'article',
};

const routesNames = {
  home: '',
  error404: '404',
  article: {
    detail: ':id'
  },
};

export const getArticleDetail = (articleUrl: string) => `/${basePaths.article}/${btoa(articleUrl)}`;

export const RoutesConfig: any = {
  basePaths,
  routesNames,
  routes: {
    home: `/${routesNames.home}`,
    error404: `/${routesNames.error404}`,
    article: {
      detail: getArticleDetail
    },
  }
};


