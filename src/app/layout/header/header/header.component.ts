import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
constructor(private router:Router, private authService: AuthService) {}
get isLoggedIn(){
  return this.authService.isLoggedIn();
}
get username(){
  return this.authService.getUsername();
} 
logout(){
  this.authService.logout();
  this.router.navigate(['/login']);
}

@Output() toggleSidebar = new EventEmitter<void>();

toggle() {
  this.toggleSidebar.emit();    
}
}
