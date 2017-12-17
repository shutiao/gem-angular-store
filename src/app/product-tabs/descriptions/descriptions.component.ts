import { Component, OnInit, Input } from '@angular/core';
import { ProductTabsComponent } from '../product-tabs.component';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.css']
})
export class DescriptionsComponent implements OnInit {

  @Input() product;  

  constructor() { }

  ngOnInit() {
  }

}
