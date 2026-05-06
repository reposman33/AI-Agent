import { Routes } from '@angular/router';
import { Agent } from './components';

export const routes: Routes = [
  {path: '', component: Agent, pathMatch: 'full'},
];
