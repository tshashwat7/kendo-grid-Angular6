import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.css']
})
export class AddTournamentComponent implements OnInit {
  model: any = {};
  dateError = false;
  constructor(private datep : DatePipe , private router : Router) { }

  ngOnInit() {
    this.model = {
      tournamentName : '',
      startDate : '',
      endDate :''
    }
  }
  validates(){
    let sDate = new Date(this.model.startDate).getTime();
    let eDate = new Date(this.model.endDate).getTime();
    if(sDate > eDate){
      this.dateError =true;
    }
    else{
      localStorage.setItem('dataa', JSON.stringify(this.model));
      this.router.navigateByUrl("/app-tournament");
    }
  }


}
