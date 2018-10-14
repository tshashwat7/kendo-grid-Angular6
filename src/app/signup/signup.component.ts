import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false; dateError = false; success = false;
  
  constructor(private formBuilder: FormBuilder , private datep : DatePipe) { 

  }
  
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern("[0-9]{10}")]]
    });
  }
  get f() {
    return this.signupForm.controls; }

  onSubmit() {
    this.submitted = true;
    if(this.signupForm.value.dob){
      let now = new Date().getTime();
      let selectDate = new Date(this.signupForm.value.dob).getTime();
      if(selectDate > (now)){
        this.dateError =true;
        this.success = false;

        return
      }else{
        this.dateError =false;
        this.success = true;

      }
    }
    if (this.signupForm.invalid) {
        return;
    }else{
      this.success = true;
   }
    
}
}