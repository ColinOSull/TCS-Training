import { Component, OnInit } from '@angular/core';
import User from 'src/app/Entity/UserToken';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  title = 'Fill out the form below';
  // to access the data of this variable in out html file use {{variable name}}
  public user:  User={
    name:'',
    password:'',
    email:'',
    
      };

  save() {
    const observables = this.userService.getUserProcess(this.user);
    observables.subscribe(
      (response: any) => {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
