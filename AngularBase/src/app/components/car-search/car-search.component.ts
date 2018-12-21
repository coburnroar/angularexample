import { Component, OnInit } from '@angular/core';
import { CarSearch } from './car-search'
import cars from '../../../data/cars.json';
import { Car } from '../car-display/car'

@Component({
  selector: 'car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent {
  
  colors=['','Red','White','Gray','Silver','Black']
  selector=['','Yes','No']
  
  carSearch = new CarSearch()
  
  matchingCars = []
  
  onSubmit() { 
  this.matchingCars = []
	for(let i = 0; i < cars.length; ++i)
	{
		let car = new Car()
		if( car.importFromJson(cars[i]) && car.matchesSearch(this.carSearch) ){		
			this.matchingCars.push(car)
		}
	}
  }
  
}
