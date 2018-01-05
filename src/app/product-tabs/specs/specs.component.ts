import { Component, OnInit, Input } from '@angular/core';
import { ProductTabsComponent } from '../product-tabs.component';

@Component({
  selector: 'specs',
  templateUrl: './specs.component.html',
  styleUrls: ['./specs.component.css']
})
export class SpecsComponent implements OnInit {
  
  @Input()  product;
  
  constructor() { }

  ngOnInit() {
  }

}
