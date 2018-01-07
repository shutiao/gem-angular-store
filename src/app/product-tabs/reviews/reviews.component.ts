import { Component, OnInit, Input } from '@angular/core';
import { ProductTabsComponent } from '../product-tabs.component';
import { Review } from '../../review';
import { FormsModule } from '@angular/forms';

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

  addReview(product){
    product.reviews.push(product.reviewForm);
    // Two ways binding. HTML is cleared and reviewForm is cleared as well.
    product.reviewForm = {};
  }
}
