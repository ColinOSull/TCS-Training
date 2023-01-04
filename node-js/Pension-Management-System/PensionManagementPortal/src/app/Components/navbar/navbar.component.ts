import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogged: boolean;
  
  constructor(
    private userService: UserService
  ) { 
    this.isLogged = this.userService.tokenValue ? true : false;
  }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
  }

}
