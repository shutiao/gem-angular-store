import { Component, OnInit, Input } from '@angular/core';
import { ProductTabsComponent } from '../product-tabs.component';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() product;

  constructor() { }

  ngOnInit() {
  }

}
