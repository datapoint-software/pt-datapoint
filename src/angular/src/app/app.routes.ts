import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MainHomeComponent } from './components/main-home/main-home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainHomeComponent
      }
    ]
  }
];
