import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { FestivalsListComponent } from '../../components/festivals-list/festivals-list.component';
import { FestivalsFormComponent } from '../../components/festivals-form/festivals-form.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'festivals',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../components/festivals-form/festivals-form.module').then(m => m.FestivalsFormModule)
          }
        ]
      },
      {
        path: 'tab1/festivals/:id',
        children: [
          {
            path: '',
            loadChildren: () =>

              // import('../menu/menu.module').then(m => m.MenuPageModule)
              import('../festival-dashboard/festival-dashboard.module').then(m => m.FestivalDashboardPageModule)

          }
        ]
      },
      {
        path: 'tab1/festivals/:id/performers',
        children: [
          {
            path: '',
            loadChildren: () =>

              // import('../menu/menu.module').then(m => m.MenuPageModule)
              import('../../pages/performers/performers.module').then(m => m.PerformersPageModule)

          }
        ]
      },
      {
        path: 'tab1/festivals/:id/foodvendors',
        children: [
          {
            path: '',
            loadChildren: () =>

              // import('../menu/menu.module').then(m => m.MenuPageModule)
              import('../../pages/foodvendors/foodvendors.module').then(m => m.FoodvendorsPageModule)

          }
        ]
      },
      {
        path: 'tab1/festivals/:id/news',
        children: [
          {
            path: '',
            loadChildren: () =>

              // import('../menu/menu.module').then(m => m.MenuPageModule)
              import('../../pages/news/news.module').then(m => m.NewsPageModule)

          }
        ]
      },
      

      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
