import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { HeaderComponent } from './layout/header/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent],
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
