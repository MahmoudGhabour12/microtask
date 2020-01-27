import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './layouts/main-navbar/main-navbar.component';
import { HomeComponent } from './views/home/home.component';
import { SigninComponent } from './views/signin/signin.component';
import { SignupComponent } from './views/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{AuthInterceptor} from './user-intersptors';
import { from } from 'rxjs';
import { UserService } from 'src/app/sercvices/user.service';
import {  DetailService } from 'src/app/sercvices/detail.service';
import { AdddetailComponent } from './views/adddetail/adddetail.component';
import { EditdetailComponent } from './views/editdetail/editdetail.component';
import { SingledetailComponent } from './views/singledetail/singledetail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    AdddetailComponent,
    EditdetailComponent,
    SingledetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,MatSidenavModule,
    HttpClientModule,ReactiveFormsModule
  ],
  providers: [UserService, DetailService ,
  {
provide : HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
