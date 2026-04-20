import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // ✅ correct import


bootstrapApplication(AppComponent,{
  providers: [
    provideHttpClient()   // ✅ ADD THIS
  ]
}).catch(err => console.error(err));

