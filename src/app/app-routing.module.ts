
 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{HomeComponent}from'./views/home/home.component';

import{SigninComponent}from'./views/signin/signin.component';
import{SignupComponent}from'./views/signup/signup.component';
import { AdddetailComponent} from './views/adddetail/adddetail.component';
import {  EditdetailComponent} from './views/editdetail/editdetail.component';
import {  SingledetailComponent} from './views/singledetail/singledetail.component';
 
const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', redirectTo: 'home',pathMatch:'full',},
 
  {path:'signin', component: SigninComponent},
  {path:'signup', component: SignupComponent},
  {path: 'home/adddetail', component: AdddetailComponent, pathMatch: 'full'},
  {path: 'home/edit/:id', component: EditdetailComponent, pathMatch: 'full'},
  {path: 'home/:id', component: SingledetailComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
