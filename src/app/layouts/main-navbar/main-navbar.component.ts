 import { UserModel } from './../../models/userModel';
import { Component, OnInit } from '@angular/core';
import{UserService}from 'src/app/sercvices/user.service';
 import{Router}from '@angular/router';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {
  isUser:boolean =false;
  userData ;
  constructor( private UserService :UserService,private router: Router) {
    // this.UserService.getToken().subscribe(x=>this.currentUser=x);
   }

  ngOnInit() {
    const user=  this.UserService.getProfile()
       
 if(user){
   this.isUser=true;
   
}
 else{
   this.isUser=false;
 }
     
 
     
  }
  logout(User){
    this.UserService.logoutUser(User);
    this.router.navigate(['/']);
  }
}
