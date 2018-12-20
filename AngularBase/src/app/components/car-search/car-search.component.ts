import { Component, OnInit } from '@angular/core';
import { CarSearch } from './car-search'

@Component({
  selector: 'car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent {
  
  colors=[null,'Red','White','Grey','Silver','Black']
  selector=[null,'Yes','No']
  
  carSearch = new CarSearch()
  
  onSubmit() { console.log(this.carSearch) }
  
}
