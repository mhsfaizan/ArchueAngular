import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  convertFormData(data){
  	var fd = new FormData();
  	for(let i in data){
  		fd.append(i,data[i]);
  	}
  	return fd;
  }
  login(data):Observable<Object>{
  	var formData = this.convertFormData(data);
  	return this.http.post<Object>("php/check.php",formData);
  }
}
