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
	/*
	products: Gem[];
	*/
	ngOnInit(){
		let gemDataService = new GemDataService();
		this.products = gemDataService.getGems();
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
}
