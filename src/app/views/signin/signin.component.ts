import { Component, OnInit } from '@angular/core';
import { UserModel } from './../../models/userModel';
import {UserService} from './../../sercvices/user.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: UserModel;

  constructor(private UserService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  
  
  loginUser(values) {
    this.UserService.login(values);
    
    this.router.navigate(['/home']);
  }
}