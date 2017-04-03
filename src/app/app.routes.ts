import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] }, // protected page
  { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
