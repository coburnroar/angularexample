import { CarSearch } from '../car-search/car-search'

export class Car {
	
	constructor(
		public id?: string,
		public make?: string,
		public year?: number,
		public color?: string,
		public price?: number,
		public hasAutomatic?: boolean,
		public hasSunroof?: boolean,
		public isFourWheelDrive?: boolean,
		public hasLowMiles?: boolean,
		public hasPowerWindows?: boolean,
		public hasNavigation?: boolean,
		public hasHeatedSeats?: boolean
	) {  }
	
	importFromJson( json: any ) {
		try {
			if( json._id === undefined || 
			json.make === undefined  || 
			json.year === undefined || 
			json.color === undefined  ||
			json.price === undefined  ||
			json.hasAutomatic === undefined ||
			json.hasSunroof === undefined  ||
			json.isFourWheelDrive === undefined  ||
			json.hasLowMiles === undefined  ||
			json.hasPowerWindows === undefined  ||
			json.hasNavigation === undefined  ||
			json.hasHeatedSeats === undefined )
			{
				throw "Invalid Input"
			}
			
			this.id = json._id
			this.make = json.make
			this.year = json.year
			this.color = json.color
			this.price = json.price
			this.hasAutomatic = json.hasAutomatic
			this.hasSunroof = json.hasSunroof
			this.isFourWheelDrive = json.isFourWheelDrive
			this.hasLowMiles = json.hasLowMiles
			this.hasPowerWindows = json.hasPowerWindows
			this.hasNavigation = json.hasNavigation
			this.hasHeatedSeats = json.hasHeatedSeats
		}
		catch(err)
		{
			console.log('Invalid Data File Imported')
			console.log(json)
			return false
		}
	
		return true
	}
	
	matchesSearch( search: CarSearch ){
		let matches =  true;
		
		if(search.color){
			if(search.color !== this.color){
				matches = false
			}
		}
			
		if(search.automaticTransmission){
			if( (search.automaticTransmission === 'Yes') !== this.hasAutomatic ){
				matches = false
			}
		}
		
		if(search.sunRoof){
			if( (search.sunRoof === 'Yes') !== this.hasSunroof ){
				matches = false
			}
		}
		
		if(search.fourWheelDrive){
			if( (search.fourWheelDrive === 'Yes') !== this.isFourWheelDrive ){
				matches = false
			}
		}
		
		if(search.lowMiles){
			if( (search.lowMiles === 'Yes') !== this.hasLowMiles ){
				matches = false
			}
		}
		
		if(search.navigation){
			if( (search.navigation === 'Yes') !== this.hasNavigation ){
				matches = false
			}
		}
			
		if(search.heatedSeats){
			if( (search.heatedSeats === 'Yes') !== this.hasHeatedSeats ){
				matches = false
			}
		}
		
		return matches
	}
	
}
