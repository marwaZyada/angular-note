import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/core/services/authservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userId!:string
constructor(private fb:FormBuilder ,private _authService:AuthservicesService,private _router:Router,private _snackBar: MatSnackBar){}
loginForm:FormGroup=this.fb.group({
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required])
})
login(data:FormGroup){
  if(data.valid){
this._authService.login(data.value).subscribe(r=>{
  console.log((r));
  if(r.message=='success'){
this._router.navigate(['/home']);
localStorage.setItem('token',r.token)
this.userId=r.user._id
console.log(this.userId);

localStorage.setItem('userId',r.user._id)
this._authService.token=localStorage.getItem('token')||""
  }
  else{
    this._snackBar.open(r.message, '', {
      duration: 3000
    });
  }
  
})
}
}
}
