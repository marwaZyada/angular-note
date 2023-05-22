import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthservicesService } from './authservices.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NoteservicesService {
baseUrl="https://sticky-note-fe.vercel.app/"
  constructor(private _httpclient:HttpClient,private _authService:AuthservicesService) { }

  addnotes():Observable<any>{
return this._httpclient.post(`${this.baseUrl}addNote`,{

  "title":"Route task2",
  "desc":"thank u bank misr",
  "citizenID":"5ed2960071fb8f001781e34b",
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaXRpemVuIjoiY2l0aXplbiIsImlhdCI6MTU5MTU0ODUzOH0.hP7fagPSqzu9zDAODAvDtCHs_qqONENLOtSLAmtA4eo"
  })
  }


 addnote(data:any):Observable<any>{
  return  this._httpclient.post(`${this.baseUrl}addNote`,{
    
    "token": this._authService.token,
    "citizenID":this._authService.userId,
    ...data
  })
  }
  getnotes():Observable<any>{
  return  this._httpclient.post(`${this.baseUrl}getUserNotes`,{
    "token": this._authService.token,
    "citizenID":this._authService.userId
  })
  }
 updatenotes():Observable<any>{
  return  this._httpclient.put(`${this.baseUrl}updateNote`,{
    "token": this._authService.token,
    "userID":this._authService.userId
  })
  }
 deletenotes(NoteID:string):Observable<any>{
  return  this._httpclient.delete(`${this.baseUrl}deleteNote`,{
    // "NoteID":NoteID,
    // "token": this._authService.token
    
  })
  }
}
