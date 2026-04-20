import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private authService: AuthService) {}

  get isLoggedIn(){
    return this.authService.isLoggedIn();
  } 
  collapsed = false;
toggleSidebar() {
  this.collapsed = !this.collapsed;
} 
}
