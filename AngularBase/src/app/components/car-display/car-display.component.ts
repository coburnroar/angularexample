import { Component, Input } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'car-display',
  templateUrl: './car-display.component.html',
  styleUrls: ['./car-display.component.css']
})
export class CarDisplayComponent {
@Input() car: Car;

}
