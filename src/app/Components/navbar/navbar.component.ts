import { Component, Input,OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { AuthservicesService } from 'src/app/core/services/authservices.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(public _autService:AuthservicesService){}
  @Input() sideNav!:MatDrawer;

  ngOnInit(): void {
   
    
  }
}
