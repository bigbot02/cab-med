import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) { }

  login() {
    const userCredentials = { username: this.username, password: this.password };
    this.http.post<any>('http://localhost/cabinet-med02/php/login.php', userCredentials).subscribe(response => {
      if (response.success) {
        this.router.navigate(['/welcome']);
      } else {
        alert('Invalid credentials');
      }
    });
  }
}
