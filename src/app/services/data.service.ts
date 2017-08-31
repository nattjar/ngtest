import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

let url = "http://localhost:59163/api/Data/getUserMenuItems";

@Injectable()
export class DataService {

	
  constructor(private http: Http) { }

  post(param:any){
	  return this.http.post(url,param).map(response=>response.json());
  }
  
  getUserMenu(){
	  return this.post({});
  }
}
