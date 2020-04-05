import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodvendorsPage } from './foodvendors.page';

const routes: Routes = [
  {
    path: '',
    component: FoodvendorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodvendorsPageRoutingModule {}
