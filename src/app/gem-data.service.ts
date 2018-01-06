import { Injectable } from '@angular/core';
import { GEMS } from './mocks'

@Injectable()
export class GemDataService {
	getGems(){
		return GEMS;
		}
	}
