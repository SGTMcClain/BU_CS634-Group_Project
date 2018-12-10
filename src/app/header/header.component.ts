import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../models/user.models';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(userService: UserService) {
    this.user = userService.getUser();
    this.user.isAuthenticated = true;
  }

  @ViewChild('navbarToggler') navbarToggler:ElementRef;

  ngOnInit() {
  }

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }
}
