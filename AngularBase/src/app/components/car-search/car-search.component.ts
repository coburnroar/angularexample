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
  
  colors=['','Red','White','Grey','Silver','Black']
  selector=['','Yes','No']
  
  carSearch = new CarSearch()
  
  matchingCars = []
  
  onSubmit() { 
	for(let i = 0; i < cars.length; ++i)
	{
		console.log(cars[i])
		//this.matchingCars.push(cars[i])
		/*let car = new Car()
		car.id = '123'
		car.make = 'Ford'
		car.year = 2017
		car.color = 'Grey'
		car.price = 45678
		car.hasSunroof = false
		car.isFourWheelDrive = true
		car.hasLowMiles = false
		car.hasPowerWindows = true
		car.hasNavigation = false
		car.hasHeatedSeats = false*/
		
		let car = new Car()
		if( car.importFromJson(cars[i])){		
			this.matchingCars.push(car)
		}
	}
	console.log(this.matchingCars)
  
  //console.log(this.carSearch) 
  }
  
}
