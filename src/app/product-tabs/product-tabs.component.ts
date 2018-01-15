import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-tabs',
  templateUrl: './product-tabs.component.html',
  styleUrls: ['./product-tabs.component.css']
})
export class ProductTabsComponent implements OnInit {

  @Input() product;

  constructor() { }

  ngOnInit() {
  }

  iTab = 2;
  tabs = ['Description', 'Specs', 'Reviews'];

  setTab(index, event){
  	this.iTab = index;
  	event.preventDefault();
	}
	
  isSet(index){
  	if (index == this.iTab){
		return true;
	} 
	else {
		return false;
	}
  }
}
