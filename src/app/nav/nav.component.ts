import { Component, OnInit,OnDestroy } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit,OnDestroy {
   user:any;
  constructor(private myser:LoginService) { }

  ngOnInit() {
  	this.myser.mysubject.subscribe((resp)=>{
  		this.user = resp;
  	},(err)=>console.log(err));
  }
  ngOnDestroy(){
  	console.log(this.user);
  }

}
