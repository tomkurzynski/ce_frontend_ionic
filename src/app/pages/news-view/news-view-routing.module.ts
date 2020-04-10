import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsViewPage } from './news-view.page';

const routes: Routes = [
  {
    path: '',
    component: NewsViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsViewPageRoutingModule {}
