import { Component, Inject, OnInit } from '@angular/core';
import { APP_CONFIG } from '../../../../configs/app.config';
import { NavigationEnd, Router } from '@angular/router';
import { ROUTES_CONFIG, RoutesConfig } from '../../../../configs/routes.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentUrl: string;

  constructor(
    @Inject(APP_CONFIG) public appConfig: any,
    @Inject(ROUTES_CONFIG) public routesConfig: any,
    private router: Router
  ) {
    this.currentUrl = '';
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }
}
