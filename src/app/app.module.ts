import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent }       from './home.component';
import { AwayComponent }       from './away.component';
import { routing, appRoutingProviders } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AwayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config));
  }
}
