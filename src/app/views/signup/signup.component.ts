import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match.validators';

import { UserModel } from './../../models/userModel';
import {UserService} from './../../sercvices/user.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: UserModel;
  registerForm: FormGroup;
  submitted = false;
  constructor(private UserService: UserService,
    private route: ActivatedRoute,private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
       
      user_name: ['', Validators.required],
      user_email: ['', [Validators.required, Validators.email]],
      user_password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
     
      acceptTerms: [false, Validators.requiredTrue]
  }, {
      validator: MustMatch('user_password', 'confirmPassword')
  });
}
get f() { return this.registerForm.controls; }

// onSubmit() {
//   this.submitted = true;

//   // stop here if form is invalid
//   if (this.registerForm.invalid) {
//       return;
//   }

//   // display form values on success
//   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
// }

onReset() {
  this.submitted = false;
  this.registerForm.reset();
 }
 


 onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.UserService.adduser(this.registerForm.value);

    // display form values on success
   
    this.router.navigate(['/home']);
  }
}
