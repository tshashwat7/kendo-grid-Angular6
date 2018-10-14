import { Component, OnInit ,Input , Output , EventEmitter } from '@angular/core';
import {CommonServiceService} from './../../common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-tournament',
  templateUrl: './view-tournament.component.html',
  styleUrls: ['./view-tournament.component.css']
})
export class ViewTournamentComponent implements OnInit {
  @Input() results : object; 
  constructor(private cs: CommonServiceService , private router : Router) { }

  ngOnInit() {
    this.results = this.cs.getData();
  }

  goBack(){
    this.router.navigateByUrl("/app-tournament");
  }

}
