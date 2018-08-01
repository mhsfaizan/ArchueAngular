import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';




import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { NavDirDirective } from './directives/nav-dir.directive';
import { MycarousalComponent } from './mycarousal/mycarousal.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MycarousalDirective } from './directives/mycarousal.directive';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


// import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    NavDirDirective,
    MycarousalComponent,
    FooterComponent,
    HomeComponent,
    MycarousalDirective,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
