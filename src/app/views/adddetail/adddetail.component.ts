import { DetailService } from './../../sercvices/detail.service';
import { UserService } from './../../sercvices/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adddetail',
  templateUrl: './adddetail.component.html',
  styleUrls: ['./adddetail.component.css']
})
export class AdddetailComponent implements OnInit {
  constructor(
     private DetailService: DetailService,
    private UserService: UserService,
    private router: Router

  ) { }

  ngOnInit() {
  }
  Adddetail(values) {
    this.DetailService.adddetail(values);
    this.router.navigate(['']);
  }

}
