import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { User } from '../models/user.models';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // providers: [ UserService ]
})
export class HeaderComponent implements OnInit {
  // @Input() user: User;
  isAuth: boolean;

  constructor(private userService: UserService) {
    // this.user = userService.getUser();
    // this.user.isAuthenticated = true;
  }

  @ViewChild('navbarToggler') navbarToggler: ElementRef;

  ngOnInit() {
    this.userService.currentAuth.subscribe(isAuth => this.isAuth = isAuth);
  }


  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }

  exitAdmin(){
    this.userService.falseAuth();
    console.log("exit admin mode");
  }
}
