import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { 

  }
  
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.maxLength(10)]]
    });
  }
  get f() { return this.signupForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid) {
        return;
    }
    alert('SUCCESS!! :-)')
}
}
