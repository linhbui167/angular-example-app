import { Component } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  template:
    '<div class="backtotop__wrap" (click)="scrollTop()"><div class="backtotop"></div></div>',
  styleUrls: ['./back-to-top.component.scss'],
})
export class BackToTopComponent {
  constructor() {}
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
