import { HeaderComponent } from './modules/root/shared/header/header.component';
import { FooterComponent } from './modules/root/shared/footer/footer.component';
import { of } from 'rxjs';
import { MockComponent } from 'ng-mocks';
import { LOCALE_ID } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const matSnackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
  const routerSpy = jasmine.createSpyObj('Router', ['events']);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MockComponent(HeaderComponent),
        MockComponent(FooterComponent),
        AppComponent
      ],
      providers: [
        { provide: MatSnackBar, useValue: matSnackBarSpy },
        { provide: Meta, useValue: {} },
        {
          provide: Title, useValue: {
            setTitle: () => {
            }
          }
        },
        { provide: LOCALE_ID, useValue: 'en' }
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    routerSpy.events.and.returnValue(of(new NavigationEnd(1, '', '/')));
    fixture.detectChanges();
  }));

  it('should create the app', (() => {
    expect(component).toBeTruthy();
  }));

  it('should check browser features', (() => {
    expect(component.checkBrowserFeatures()).toBeTruthy();
  }));
});
