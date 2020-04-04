import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FestivalDashboardComponent } from '../festival-dashboard/festival-dashboard.component'; 
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FestivalDashboardComponent,
    children: [
      {
        path: '/foodvendors',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../food-list/food-list.component').then(m => m.FoodListComponent)
          }
        ]
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FestivalDashboardRoutingModule { }
