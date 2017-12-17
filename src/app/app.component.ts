import { Component } from '@angular/core';
import { Gem } from './gem';
import { GEMS } from './mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	products: Gem[];
	ngOnInit(){
		this.products = GEMS;
		}
}
