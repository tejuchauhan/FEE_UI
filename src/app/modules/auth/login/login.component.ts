import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { LoginRequestDto } from 'src/app/models/login-request-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.logout();
  }
  login() {
    const loginRequest: LoginRequestDto = {
      userName: this.username,
      password: this.password
    };

    this.authService.login(loginRequest).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.roleid);
        localStorage.setItem('username', response.user);
        // Handle successful login
        this.router.navigate(['/welcome']);
      },
      error: (error) => {
        // Handle login error
        alert('Invalid username or password');
      }
    });

  }
}
