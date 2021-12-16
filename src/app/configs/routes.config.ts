import { InjectionToken } from '@angular/core';

export const ROUTES_CONFIG = new InjectionToken('routes.config');

const basePaths = {
  hero: 'hero',
  auth: 'auth',
  article: 'article',
};

const routesNames = {
  home: '',
  error404: '404',
  article: {
    detail: ':id'
  },
  hero: {
    myHeroes: 'my-heroes',
    detail: ':id',
  },
  auth: {
    signUp: 'sign-up',
    logIn: 'log-in',
  }
};

export const getHeroDetail = (id: string) => `/${basePaths.hero}/${id}`;
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
    hero: {
      myHeroes: `/${basePaths.hero}/${routesNames.hero.myHeroes}`,
      detail: getHeroDetail
    },
    auth: {
      signUp: `/${basePaths.auth}/${routesNames.auth.signUp}`,
      logIn: `/${basePaths.auth}/${routesNames.auth.logIn}`,
    }
  }
};


