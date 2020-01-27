import { DetailService } from './../../sercvices/detail.service';
import { UserModel } from './../../models/userModel';
import { UserService } from './../../sercvices/user.service';
import { DetailModel } from './../../models/detail';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-singledetail',
  templateUrl: './singledetail.component.html',
  styleUrls: ['./singledetail.component.css']
})
export class SingledetailComponent implements OnInit {
  detail: DetailModel;
  constructor(
    // tslint:disable-next-line: no-shadowed-variable
    private UserService: UserService,
    private DetailService: DetailService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getdetail();
  }

  getdetail() {
    const id = this.route.snapshot.params.id;
    this.DetailService.getdetailById(id).subscribe(
      data => this.detail = data
    );
  }
}