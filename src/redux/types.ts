export interface Vehicle {
	id: number;
	make: string;
	model: string;
	engineSize: string;
	fuel: string;
	year: number;
	mileage: number;
	auctionDateTime: string;
	startingBid: number;
	favourite: boolean;
	order?: 'asc'|'desc'
}

export interface VehiclesState {
	vehicles: Vehicle[];
	suggestions: string[];
	favourites: string[];
}