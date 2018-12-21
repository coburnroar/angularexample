export class Car {
	
	constructor(
		public id?: string,
		public make?: string,
		public year?: int,
		public color?: string,
		public price?: int,
		public hasSunroof?: boolean,
		public isFourWheelDrive?: boolean,
		public hasLowMiles?: boolean,
		public hasPowerWindows?: boolean,
		public hasNavigation?: boolean,
		public hasHeatedSeats?: boolean
	) {  }
	
	importFromJson( json: Object ) {
		try {
			if(json._id === undefined || 
			json.make === undefined  || 
			json.year === undefined || 
			json.color === undefined  ||
			json.price === undefined  ||
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
	
}
