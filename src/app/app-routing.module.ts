import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },   {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'user-edit',
    loadChildren: () => import('./pages/user-edit/user-edit.module').then( m => m.UserEditPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'addfood',
    loadChildren: () => import('./components/food-form/food-form.module').then( m => m.FoodFormModule)
  },
  {
    path: 'addperformer',
    loadChildren: () => import('./components/performer-form/performer-form.module').then( m => m.PerformerFormModule)
  },
  {
    path: 'performer/:id',
    loadChildren: () => import('./pages/performer-view/performer-view.module').then(m => m.PerformerViewPageModule)
  },
  {
    path: 'updateperformer/:id',
    loadChildren: () => import('./components/performer-edit/performer-edit.module').then(m => m.PerformerEditModule)
  }
  
 
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  // },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
