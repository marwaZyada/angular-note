import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

import { AuthservicesService } from 'src/app/core/services/authservices.service';

class CustomErrorStateMatcher implements ErrorStateMatcher{
  isErrorState(control: AbstractControl<any, any> | null, form: FormGroupDirective | NgForm | null): boolean {
    return control?.value;
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  errState=new CustomErrorStateMatcher()
  
  constructor(private fb:FormBuilder,private _authservice:AuthservicesService,private _route:Router){}
    registerForm:FormGroup=this.fb.group({
      first_name:new FormControl(null,[Validators.required,Validators.maxLength(10)]),
      last_name:new FormControl(null,[Validators.required,Validators.maxLength(15)]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required]),
      age:new FormControl(null,[Validators.required,Validators.min(15)])
    })

    registration(data:FormGroup){
      if(data.valid){
console.log(data.value);
this._authservice.register(data.value).subscribe(res=>{console.log(res)
if(res.message=="success"){
this._route.navigate(['/login'])
}

})
      }

    }
  }


