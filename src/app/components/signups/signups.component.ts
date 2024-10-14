import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-signups',
  templateUrl: './signups.component.html',
  styleUrls: ['./signups.component.css']
})
export class SignupsComponent 
{
  errMsg: any;
  userform!: FormGroup;
  constructor(private form_builder:FormBuilder,private userService:UserService){}
  ngOnInit()
  {
  this.userform=this.form_builder.group({
  full_Name:['',Validators.required],
  email:['',[Validators.required,Validators.email]],
  password:['',Validators.required],
  confirm_password:['',Validators.required],
  });
}
onSubmit() {
  if (this.userform.valid) {
    const formData = this.userform.value;
    if (formData.password !== formData.confirm_password) {
      this.errMsg = 'Passwords do not match!';
      return;
    }
    this.userService.addUser(formData).subscribe(
      (response:any) => {
        console.log('User registered:', response);
        this.userform.reset();  // Reset the form on successful registration
        this.errMsg = null;  // Clear any error messages
      },
      (error) => {
        console.error('Error during registration:', error); 
        this.errMsg = 'Registration failed. Please try again.';  // Handle error
      }
    );
  } else {
    this.errMsg = 'Please fill in all fields correctly!';
  }
}
}





