import { Routes } from '@angular/router';
import { FeComponent } from './components/fe/fe.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FeComponent
  }
];
