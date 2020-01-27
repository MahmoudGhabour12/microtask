import { DetailModel } from './../models/detail';
import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  APIURL = 'http://localhost:3000/detail/';

  constructor(private http: HttpClient) { }

  getalldetails() {
    return this.http.get<DetailModel[]>(this.APIURL );
  }

  adddetail(Detail: DetailModel ) {
    return this.http.post(this.APIURL , Detail).subscribe();
  }
  deletedetailById(id: string) {
    return this.http.delete(this.APIURL + id);
  }

  getdetailById(id: string) {
    return this.http.get<DetailModel>(this.APIURL +  id );
  }

  updatedetailById(id: string, detail: any) {
    return this.http.patch(this.APIURL  + id, detail);
  }

}