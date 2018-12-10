import { Injectable } from '@angular/core';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  
  // createUser(){
  //   console.log('Creating User');
  //   this.user = new User;
  //   return this.user;
  // }

  getUser(){ return this.user; }

  constructor() { this.user = new User; }
}
