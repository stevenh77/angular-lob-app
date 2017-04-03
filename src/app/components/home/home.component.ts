import { Component } from '@angular/core';
import { Auth } from 'app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  template: `
    <h1>Home</h1>
    <br>
    <h4 *ngIf="Auth.authenticated()">You are logged in</h4>
    <h4 *ngIf="!Auth.authenticated()">You are not logged in, please click 'Log in' button to login</h4>
  `
})

export class HomeComponent {
  Auth: Auth;
  constructor(private auth: Auth) {
    this.Auth = auth;
  }
};
