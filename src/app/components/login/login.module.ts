import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginComponent } from '../login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LoginComponent}]),
    FormsModule,
    IonicModule
  ],
  exports: [
    LoginComponent, RouterModule
  ]
})
export class LoginModule { }
