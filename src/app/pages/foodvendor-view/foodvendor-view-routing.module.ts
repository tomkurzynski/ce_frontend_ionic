import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodvendorViewPage } from './foodvendor-view.page';

const routes: Routes = [
  {
    path: '',
    component: FoodvendorViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodvendorViewPageRoutingModule {}
