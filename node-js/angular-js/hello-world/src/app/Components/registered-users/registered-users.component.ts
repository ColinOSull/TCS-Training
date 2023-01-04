import { Component, OnInit } from '@angular/core';
import User from 'src/app/Entity/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {
  users : User[] = [];

  deleteRow(user,index){
    const observables = this.userService.deleteUser(user);
    observables.subscribe((response:any) => {
      console.log(response);
      this.users.splice(index,1)
      
    })
    
  }

  constructor( public userService: UserService) { }

  ngOnInit(): void {
    const promise = this.userService.getUsers();
    promise.subscribe((response) => {
      console.log(response);
      this.users = response as User[];
    })
  }
}
