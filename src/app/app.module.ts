import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { TournamentComponent } from './tournament/tournament.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    TournamentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    RouterModule.forRoot([
      {
         path: 'app-signup',
         component: SignupComponent
      },
      {
        path: 'app-header',
        component: HeaderComponent
     },
     {
      path: 'app-tournament',
      component: TournamentComponent
   }, 
   {
    path: '',
    component: LoginComponent
 }
   ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
