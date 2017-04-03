import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { routing, appRoutingProviders } from './app.routes';
import { Auth } from 'app/services/auth/auth.service';
import { AuthGuard } from 'app/services/auth/auth.guard';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    },
    Auth,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config));
  }
}
