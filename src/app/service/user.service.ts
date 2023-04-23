import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _isLoggedIn = false;
  private readonly API_URL =
    'http://localhost/apache/php_angular_bootstrap/login/login.php';

  constructor(private http: HttpClient, private router: Router) {}

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  login(email: string, pass: string): Observable<boolean> {
    return this.http
      .post<{ Message: string; StatusCode: number }>(this.API_URL, {
        email,
        pass,
      })
      .pipe(
        map((response) => {
          if (response.StatusCode === 200) {
            this._isLoggedIn = true; //* set isLoggedIn to true when login is successful
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('message', response.Message);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['homePage']);
  }
}
