import {  UserService } from 'src/app/sercvices/user.service';
import { UserModel } from '../../models/userModel';
import {  DetailService } from 'src/app/sercvices/detail.service';
import {  DetailModel } from '../../models/detail';
 
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
 import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  detail: DetailModel[]=[];
  user: UserModel[];
   constructor(private DetailService: DetailService,
    private UserService: UserService,
    private route: ActivatedRoute,
    private router: Router) { 
      this.getdetails();
    }

  ngOnInit() {
    this.getdetails();
  }
  getdetails() {
    this.DetailService.getalldetails().subscribe(
      data => this.detail = data
    );
     this.UserService.getusers().subscribe(
      data => this.user = data);
     } 
     deletedetail(id) {
      this.DetailService.deletedetailById(id).subscribe();
      this.router.navigateByUrl('/del', { skipLocationChange: true} )
      .then(() => {
        this.router.navigate(['']);
      });
    }
}
