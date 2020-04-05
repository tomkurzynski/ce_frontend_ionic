import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'festival-dashboard/:id',
        loadChildren: '../festival-dashboard/festival-dashboard.module'
      },
      {
        path: 'performers',
        loadChildren: '../performers/performers.module',
      },
      {
        path: 'foodvendors',
        loadChildren: '../foodvendors/foodvendors.module',
      }
    ]
  },
  {
    path: '',
    redirectTo: '/festival-dashboard/'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
