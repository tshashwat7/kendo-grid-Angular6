import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router){}

  ngOnInit() {
  }
  errorMsgUser =  '' ;errorMsgPswd= ''; 


  myClickFunction(user , pswd) { 
    if(user != "manik"){
      this.errorMsgUser = 'Invalid Login ID';
        }else{
          this.errorMsgUser = '';
        }
        alert(pswd);
        if(pswd != "manik"){
          this.errorMsgPswd = 'Invalid Password';
        }
        else {
        this.errorMsgPswd = '';
            }
    if(this.errorMsgUser == '' && this.errorMsgPswd == '')
        {  
           this.router.navigateByUrl('/app-tournament');
        }else{

        }
       }
}
