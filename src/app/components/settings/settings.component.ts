import { Component } from '@angular/core';
import { Auth } from 'app/services/auth/auth.service';

@Component({
  selector: 'settings',
  template: `
    <h4>Settings</h4>
  `
})

export class SettingsComponent {
  constructor(private auth: Auth) {}
};
