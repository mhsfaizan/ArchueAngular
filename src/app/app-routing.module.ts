import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes:Routes = [
	{path:"",redirectTo:"/index",pathMatch:"full"},
	{path:"index",component:HomeComponent},
  {path:"login",component:LoginComponent},
	{path:"dashboard",component:DashboardComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
  	RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
