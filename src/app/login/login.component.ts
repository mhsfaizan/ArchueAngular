import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myLogin:LoginService,private fb:FormBuilder,private router:Router) { }
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
         alert("succesfully login u");
         this.router.navigate(['/dashboard']);
         this.myLogin.addLogin(resp.data);
      }
      else{
        alert("login error");
         this.router.navigate(['/']);
      }
    }
    ,(err)=>console.log(err.message));
  }

}
