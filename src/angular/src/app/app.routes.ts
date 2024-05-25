import { Routes } from '@angular/router';
import { FeComponent } from './components/fe/fe.component';
import { FeHomeComponent } from './components/fe/home/fe-home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: FeHomeComponent
      }
    ]
  }
];
