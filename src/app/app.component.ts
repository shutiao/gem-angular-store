import { Component } from '@angular/core';
import { Gem } from './gem';

import { GemDataService } from './gem-data.service';

/* Use data service instead
import { GEMS } from './mocks';
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	products: Gem[];
	constructor(private gemDataService: GemDataService) { }  
	ngOnInit(){
		/*
		let gemDataService = new GemDataService();
		*/
		this.gemDataService.getGems()
		.subscribe(mocks => this.products = mocks);		
		/* this.products = GEMS;*/
		}
	upQuantity(product){
		product.quantity++;
		}
	downQuantity(product){
		if (product.quantity){
			product.quantity--;
			}
		}
	totalPurchases(){
		let sum = 0;
		if (Array.isArray(this.products)){
			for (let product of this.products){
				if(product.quantity){
					sum += product.quantity * product.price;
				}
			}
		}
		return sum;
	}


}
