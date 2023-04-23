import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from './interface/login.interface';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  fromLogin: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    pass: ['', Validators.required],
  });
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {}

  login() {
    const email = this.fromLogin.get('email')!.value || '';
    const pass = this.fromLogin.get('pass')!.value || '';
    this.userService.login(email, pass).subscribe({
      next: (res) => {
        if (res) {
          this.router.navigate(['userPage']);
        }
      },
      error: (error) => {
        if (error.status === 404) {
          console.log(error.error.Message);
          this.fromLogin.reset();
        }
      },
    });
  }
}
