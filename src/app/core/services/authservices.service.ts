import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {
  isloading:BehaviorSubject<boolean>=new BehaviorSubject(false)
token:string=""
decode:any
userId!:string

  constructor(private _httpclient:HttpClient,private _router:Router) { 
    this.isloading.subscribe(r=>console.log(r))
    this.token=localStorage.getItem('token')||""
   this.decode=jwtDecode(this.token)
   this.userId=this.decode._id
    console.log(this.userId);
    
  }


  register(data:FormGroup):Observable<any>{
   return this._httpclient.post("https://sticky-note-fe.vercel.app/signup",data)
  }

  login(data:FormGroup):Observable<any>{
return this._httpclient.post("https://sticky-note-fe.vercel.app/signin",data)
  }

  signout(){
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    this.token="";
    this.userId=""
    this._router.navigate(['/login'])
  }
}
