import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myLogin:LoginService) { }
  loginForm:FormGroup;
  ngOnInit() {
  	this.loginForm = new FormGroup({
  		username:new FormControl('',Validators.required),
  		password:new FormControl('',Validators.required)
  	});
  }
  onSubmit(value){
    console.log(value);
  	// this.myLogin.login(value)
    // .subscribe((resp)=>console.log(resp));
  }

}
