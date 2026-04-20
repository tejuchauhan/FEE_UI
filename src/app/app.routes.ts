import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modules/auth/login/login.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },       // ✅ clean URL
  { path: 'welcome', component: WelcomeComponent },   // ✅ clean URL
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // ✅ default route
  { path: '**', redirectTo: 'login' } // ✅ wildcard fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}