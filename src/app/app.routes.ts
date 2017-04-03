import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';
import { HomeComponent }               from './home.component';
import { AwayComponent }               from './away.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'away', component: AwayComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
