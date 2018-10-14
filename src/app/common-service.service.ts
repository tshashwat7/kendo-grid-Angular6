import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
value;
  constructor() { }
  setDat(val){
    this.value = val;
  }
  getData(){
return this.value;
  }
}
