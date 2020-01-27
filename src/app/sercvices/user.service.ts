import { Injectable } from '@angular/core';
import { UserModel } from './../models/userModel';
import { HttpClient } from '@angular/common/http';
import{Observable ,BehaviorSubject} from 'rxjs'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  APIURL = 'http://localhost:3000/user';
 token: string;
 user:Observable<UserModel>
 
   constructor(private http: HttpClient) {
    
   }
   adduser(User: UserModel) {
    return this.http.post<{user:UserModel, token:string}>(this.APIURL+'/register' , User).subscribe(
      response=>{
        this.token = response.token        
          
        localStorage.setItem('token', response.token)
      });
  }
getToken(){
  let token= localStorage.getItem('token')
  return token;
}
 
getusers() {
  return this.http.get<UserModel[]>(this.APIURL );
}

getProfile(){
  return this.http.get<UserModel>(this.APIURL+'/me')
}
login(data){
  return this.http.post<{user:UserModel, token:string}>(this.APIURL +'/login',data).subscribe(
  response=>{
    this.token = response.token        
      
    localStorage.setItem('token', response.token)
  });
}
  
  
  deleteUserById(id: string) {
    return this.http.delete(this.APIURL + '/user/' + id);
  }

  getUserById(id: string) {
    return this.http.get<UserModel>(this.APIURL + '/' + id );
  }
 logoutUser(User: UserModel){
  return this.http.post(this.APIURL + '/logout',User);

}
  updateUserById(id: string, user: any) {
    return this.http.patch(this.APIURL + '/user/' + id, user);
  }
}
