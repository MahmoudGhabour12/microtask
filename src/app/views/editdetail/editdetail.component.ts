import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../sercvices/user.service';
import { UserModel } from '../../models/userModel';
import { DetailService } from './../../sercvices/detail.service';
import { DetailModel } from '../../models/detail';
import { Component, OnInit, RootRenderer } from '@angular/core';
@Component({
  selector: 'app-editdetail',
  templateUrl: './editdetail.component.html',
  styleUrls: ['./editdetail.component.css']
})
export class EditdetailComponent implements OnInit {
  detail: DetailModel={_id: '',text:'',done:'',user_id:''};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
     private UserService: UserService,
    private DetailService: DetailService
  ) { }
  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    const id = this.route.snapshot.params.id;
    this.DetailService.getdetailById(id).subscribe(
      data => this.detail = data
    );
  }
  EditMydetail(myUpdatedData){
    const id = this.route.snapshot.params.id;
    this.DetailService.getdetailById(id).subscribe(
      data => {
        this.detail = data;
        this.DetailService.updatedetailById(id, myUpdatedData).subscribe();
      }
    );
    this.router.navigate(['']);
  }
}
