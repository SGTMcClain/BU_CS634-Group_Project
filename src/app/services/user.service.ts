import { Injectable } from '@angular/core';
import { User } from '../models/user.models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User = new User();
  private isAuthenticated = new BehaviorSubject(null);

  currentAuth = this.isAuthenticated.asObservable();

  // createUser(){
  //   console.log('Creating User');
  //   this.user = new User;
  //   return this.user;
  // }

  getUser(){ return this.user; }

  constructor() {}

  trueAuth() {
    this.isAuthenticated.next(true);
  }

  falseAuth() {
    this.isAuthenticated.next(false);
  }
}
