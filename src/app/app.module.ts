import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
// import { LoginComponent } from './components/login/login.component';
// import { HomeComponent } from './components/home/home.component';
// import { FormsModule } from '@angular/forms';
import { AppService } from './services/app.service';

// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: 'home'},
//   { path: 'home', component: HomeComponent}
//   // { path: 'login', component: LoginComponent}
// ];

@NgModule({
  declarations: [
    AppComponent
    // HomeComponent,
    // LoginComponent
  ],
  entryComponents: [],
  imports: [
    // RouterModule.forRoot(routes),
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule
   // FormsModule
  ],
  providers: [
    CookieService,
    AppService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
