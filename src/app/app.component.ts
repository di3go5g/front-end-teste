import { Component, OnInit } from '@angular/core';

import { UserService } from './services/user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'teste-front-end';
  sort: string;

  user = {} as User;
  users: User[];

  constructor(private userService: UserService){}

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this.userService.getUser().subscribe((users: User[]) => {
      this.users = users;
    });
  }
}
