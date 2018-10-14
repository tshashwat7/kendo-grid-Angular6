import { Component, OnInit } from '@angular/core';
import { TournamentComponent } from '../tournament/tournament.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
menuuItems;user;
  constructor(private router : Router) { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
this.menuuItems = [
  {
    text: 'Tournament Setup',
    path: 'app-tournament'
  },
  {
    text: 'Fixture Setup',
    path: 'app-fixture-setup'
  },
  {
    text: 'Team Setup',
    path: 'app-team-setup'
  }]
 }

 logout(){
  this.router.navigateByUrl('/app-login');

 }

}
