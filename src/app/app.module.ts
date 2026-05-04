import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // ✅ for API calls

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { HeaderComponent } from './layout/header/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { LoginComponent } from './modules/auth/login/login.component';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { AddStudentComponent } from './modules/Students/pages/add-student/add-student.component';
import { AllStudentComponent } from './modules/Students/pages/all-student/all-student.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    WelcomeComponent,
    AllStudentComponent,
    AddStudentComponent // declare your root component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    AppRoutingModule // ✅ important if using HttpClient

  ],
  providers: [],
  bootstrap: [AppComponent] // entry component
})
export class AppModule { }