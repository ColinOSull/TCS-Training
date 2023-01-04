import { Component, OnInit } from '@angular/core';
import User from 'src/app/Entity/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  title = 'Fill out the form below';
  // to access the data of this variable in out html file use {{variable name}}
  user: User = new User();

  save() {
    const observables = this.userService.saveUser(this.user);
    observables.subscribe(
      (response: any) => {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }

  constructor(private userService: UserService) {}

  ngOnInit(): void {}
}
