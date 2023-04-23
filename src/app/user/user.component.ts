import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  message!: string;
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    if (!localStorage.getItem('isLoggedIn')) {
      this.router.navigate(['homePage']);
    } else {
      this.message = localStorage.getItem('message') ?? 'Default message';
    }
  }
  logout() {
    this.userService.logout();
  }
}
