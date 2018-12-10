import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.models';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  // user: User;
  isAuth: boolean;

  constructor(private userService: UserService) {}

  // toggleAuthentication(){
  //   this.user.isAuthenticated = !this.user.isAuthenticated;
  //   console.log(this.user.isAuthenticated);
  // }

  ngOnInit() {
    this.userService.currentAuth.subscribe(isAuth => this.isAuth = isAuth);
  }

  updateAuth(){

    this.userService.trueAuth();
    console.log('Clicked Sign In ' + this.isAuth);
  }

}
