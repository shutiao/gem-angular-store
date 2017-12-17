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
  isSet(tab){
  	if (tabs[activeTabIndex] == tab){
		return True;
	} 
	else {
		return False;
	}
  }
}
