import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './shared/modules/graphql.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './modules/core/core.module';
import { RootModule } from './modules/root/root.module';
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(localeEs, 'es');

@NgModule({
  imports: [
    HttpClientModule,
    GraphQLModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    RootModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
