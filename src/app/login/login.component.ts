import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myLogin:LoginService,private fb:FormBuilder) { }
  loginForm;
  ngOnInit() {
  	this.loginForm = this.fb.group({
  		username:[''],
  		password:['']
  	});
  }
  onSubmit(value){
  	this.myLogin.login(value)
    .subscribe((resp)=>{
      if(resp.status=="ok"){
        alert("succesfully login");
      }
      else{
        alert("login error");
      }
    }
    ,(err)=>console.log(err.message));
  }

}
