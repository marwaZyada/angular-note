import { Component } from '@angular/core';
import { AuthservicesService } from 'src/app/core/services/authservices.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
constructor(public _authService:AuthservicesService){}
}
