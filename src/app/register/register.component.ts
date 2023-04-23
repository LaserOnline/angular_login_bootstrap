import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  fromRegister = this.formBuilder.group({
    email: ['', Validators.required],
    pass: ['', Validators.required],
  });

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}
  ngOnInit(): void {}

  register() {
    this.http
      .post(
        'http://localhost/apache/php_angular_bootstrap/register/register.php',
        this.fromRegister.value
      )
      .subscribe({
        next: (res) => {
          console.log(res);
        },
      });
  }
}
