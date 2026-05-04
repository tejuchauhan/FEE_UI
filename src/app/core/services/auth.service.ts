import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay,finalize,Observable,of,throwError } from 'rxjs';
import { LoaderService } from './loader.service';
import { LoginRequestDto } from '../../models/login-request-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient, private loaderService: LoaderService) { } 

  login_(loginRequest: LoginRequestDto){
    return this.http.post(this.loginUrl, loginRequest); 
  }
  
  login(loginRequest: LoginRequestDto): Observable<any> {
    this.loaderService.show();
    // MOCK API RESPONSE
    if(loginRequest.userName === 'admin' && loginRequest.password === 'admin') {
      const response = { 
        token: 'mock-jwt-token-admin',
        role: 'ADMIN',
        roleId: 1,
        user:'Admin'
      };

      localStorage.setItem('roleid', response.roleId.toString());
      localStorage.setItem('username', response.user);
      return of({response}).pipe(delay(1000), finalize(() => this.loaderService.hide()));

    }
    if(loginRequest.userName === 'user' && loginRequest.password === 'user') {
      const response = { 
        token: 'mock-jwt-token-user',
        role: 'USER',
        roleId: 2,
        user:'User'
      };
      localStorage.setItem('roleid', response.roleId.toString());
      localStorage.setItem('role', response.role);
      return of({response}).pipe(delay(1000), finalize(() => this.loaderService.hide()));
    }
    return throwError(() => new Error('Invalid credentials')).pipe(delay(1000), finalize(() => this.loaderService.hide()));

  }
  getRole(){
    return localStorage.getItem('role');
  }
  isLoggedIn(){
    return !!localStorage.getItem('role');
  }
  logout(){
    localStorage.clear() ;
  }
  getUsername(){
    const username = localStorage.getItem('username');
    if(username){
      return 'Admin'; //username.charAt(0).toUpperCase() + username.slice(1);
    }
    return null;
  }
}
