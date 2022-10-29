import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'iot-platform',
    loadChildren: () =>
      import('iot-platform/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'farmbox',
    loadChildren: () =>
      import('farmbox/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'nyp',
    loadChildren: () => import('nyp/Module').then((m) => m.RemoteEntryModule),
  },
];
