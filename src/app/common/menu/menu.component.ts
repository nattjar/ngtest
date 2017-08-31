import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 menuItems:any[];	
	
  constructor(private ds: DataService) { }

  ngOnInit() {
	this.getData();
  }
  
  getData(){
	this.ds.getUserMenu().subscribe(data=>{
		this.menuItems = data.children;
	});	  
  }  
  
  itemClick(item){
	  console.log(item); 
  }
}
