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

  activeTabIndex = 0;	 
  tabs = ['Description', 'Specs', 'Reviews'];
  setTab(index, event){
  	this.activeTabIndex = index;
  	event.preventDefault();
	}
	
   isSet(index){
  	if (index == this.activeTabIndex){
		return true;
	} 
	else {
		return false;
	}
  }
}
