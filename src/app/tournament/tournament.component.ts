import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import { process, State } from '@progress/kendo-data-query';
import { GridComponent, GridDataResult, DataStateChangeEvent} from '@progress/kendo-angular-grid';
import {tournaments} from './../jsonData';
import { iteratorToArray } from '@angular/animations/browser/src/util';
import { Router } from '@angular/router';
import { ViewTournamentComponent } from './../tournament/view-tournament/view-tournament.component';
import {CommonServiceService} from './../common-service.service';
@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
results :object = {}; datitems;


  public state: State = {
    skip: 0,
    take: 5,
    filter: {
      logic: 'and',
      filters: [{ field: 'tournamentName', operator: 'contains', value: '' }]
    }
};
public gridData: GridDataResult = process(tournaments, this.state);
  searchText;
  constructor(private router : Router ,private cs: CommonServiceService) { }

  ngOnInit() {
    let dataItem = JSON.parse(localStorage.getItem('dataa'));
    if(dataItem){
      this.gridData.data.push(dataItem);
    }
  }
  deleteTour(id){
   this.gridData.data.splice(id , 1);
  }
  tournamentName(val){
    this.datitems = val;
    this.cs.setDat(this.datitems);
    if(this.results){this.router.navigateByUrl('/app-view-tournament');}
  }
public dataStateChange(state: DataStateChangeEvent): void {
  this.state = state;
  this.gridData = process(tournaments, this.state);
}
}
