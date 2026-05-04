import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modules/auth/login/login.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { AddStudentComponent } from './modules/Students/pages/add-student/add-student.component';
import { AllStudentComponent } from './modules/Students/pages/all-student/all-student.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },       // ✅ clean URL
  { path: 'welcome', component: WelcomeComponent },
  { path: 'students/add', component: AddStudentComponent }, 
  { path: 'students/all', component: AllStudentComponent },   // ✅ clean URL
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // ✅ default route
  { path: '**', redirectTo: 'login' } // ✅ wildcard fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}