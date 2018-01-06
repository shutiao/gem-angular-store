import { Injectable } from '@angular/core';
import { Gem } from './gem';
import { GEMS } from './mocks'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GemDataService {
	constructor(private http: Http){
	}
	
	getGems(){
	/*return GEMS;*/
	return this.http.get('/assets/mocks.json').map(response => <Gem[]> response.json().data);
		}
	}
