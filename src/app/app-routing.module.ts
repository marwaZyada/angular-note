import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { AuthguardGuard } from './core/guard/authguard.guard';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent,title:"home",canActivate:[AuthguardGuard]},
  {path:"login",component:LoginComponent,title:"log in"},
  {path:"register",component:RegisterComponent,title:"register"},
  {path:"**",component:NotfoundComponent,title:"404"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
