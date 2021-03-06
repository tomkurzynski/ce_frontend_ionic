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
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule)
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
  },
  {
    path: 'foodvendor-view',
    loadChildren: () => import('./pages/foodvendor-view/foodvendor-view.module').then( m => m.FoodvendorViewPageModule)
  },
  {
    path: 'foodvendor/:id',
    loadChildren: () => import('./pages/foodvendor-view/foodvendor-view.module').then(m => m.FoodvendorViewPageModule)
  },
  {
    path: 'updatefoodvendor/:id',
    loadChildren: () => import('./components/foodvendor-edit/foodvendor-edit.module').then(m => m.FoodvendorEditModule)
  },
  {
    path: 'newsitem/:id',
    loadChildren: () => import('./pages/news-view/news-view.module').then( m => m.NewsViewPageModule)
  },
  {
    path: 'addnews',
    loadChildren: () => import('./components/news-form/news-form.module').then(m => m.NewsFormModule)
  },
  {
    path: 'updatenews/:id',
    loadChildren: () => import('./components/news-edit/news-edit.module').then(m => m.NewsEditModule)
  },
  {
    path: 'updatefestival/:id',
    loadChildren: () => import('./components/festivals-edit/festivals-edit.module').then(m => m.FestivalsEditModule)
  },
  {
    path: 'room',
    loadChildren: () => import('./pages/room/room.module').then(m => m.RoomPageModule)
  },
  {
    path: 'updateroom/:id',
    loadChildren: () => import('./components/room-edit/room-edit.module').then(m => m.RoomEditModule)
  },
  {
    path: 'addroom',
    loadChildren: () => import('./components/room-form/room-form.module').then(m => m.RoomFormModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
