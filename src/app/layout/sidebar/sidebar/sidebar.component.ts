import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() collapsed: boolean = false;

  studentsOpen=false;

  toggleStudentsMenu() {
    this.studentsOpen = !this.studentsOpen;
  } 

  getUserRole(): string {
    return localStorage.getItem('userRole') || '';
  }

  getUserRoleId(): string {
    return localStorage.getItem('userRoleId') || '';
  }

  hasRole(role: string): boolean {
    return this.getUserRoleId() === role; 
  } 

  hasAnyRole_(roles: string[]): boolean {
     debugger;
   console.log('Checking roles:', roles, 'User Role ID:', this.getUserRoleId());
   console.log('User role ID type:', typeof this.getUserRoleId(), 'Roles array type:', typeof roles[0]);
   return roles.includes(this.getUserRoleId()); 
  }

  hasAnyRole(roles: number[]): boolean {
     debugger;
    const userRole =1;// Number(this.getUserRoleId());
    return roles.includes(userRole);
  }
  

  }
