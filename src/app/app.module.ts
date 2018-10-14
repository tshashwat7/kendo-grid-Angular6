import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {DatePipe} from '@angular/common';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { TournamentComponent } from './tournament/tournament.component';
import { LoginComponent } from './login/login.component';
import { TeamSetupComponent } from './team-setup/team-setup.component';
import { FixtureSetupComponent } from './fixture-setup/fixture-setup.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe} from './filter.pipe';
import { ViewTournamentComponent } from './tournament/view-tournament/view-tournament.component';
import { AddTournamentComponent } from './tournament/add-tournament/add-tournament.component';


  
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    TournamentComponent,
    LoginComponent,
    TeamSetupComponent,
    FixtureSetupComponent,
    FilterPipe,
    ViewTournamentComponent,
    AddTournamentComponent
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
   },    {
    path: 'app-fixture-setup',
    component: FixtureSetupComponent
 },    {
  path: 'app-team-setup',
  component: TeamSetupComponent
}, 
{
  path: '',
  component: LoginComponent
},  {
  path: 'app-view-tournament',
  component: ViewTournamentComponent
},  {
  path: 'app-add-tournament',
  component: AddTournamentComponent
},
 {
  path: 'app-login',
  component: LoginComponent
}
   ]),
    GridModule,
    BrowserAnimationsModule 
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
