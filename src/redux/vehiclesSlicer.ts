import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VehiclesState, Vehicle } from './types';
import vehicles from '../configrations/vehicles.json';

const updatedVehicles = vehicles.map((vehicle, index) => ({
	id: index + 1,
	...vehicle,
}));

const initialState: VehiclesState = {
	vehicles: updatedVehicles,
	suggestions: [],
	favourites: [],
};

const vehiclesSlice = createSlice({
	name: 'vehicles',
	initialState,
	reducers: {
		filterVehicles: (state, action: PayloadAction<string>) => {
			const value = action.payload.toLowerCase();

			const filteredVehicles = state.vehicles.filter(vehicle =>
				vehicle.make.toLowerCase().includes(value) ||
				vehicle.model.toLowerCase().includes(value) ||
				vehicle.year.toString().includes(value) ||
				vehicle.mileage.toString().includes(value)
			);

			state.suggestions = filteredVehicles.map(vehicle => vehicle.make).slice(0, 3);
			state.vehicles = filteredVehicles;

			if (value.length < 1) {
				state.vehicles = updatedVehicles;
				state.suggestions = [];
			}
		},
		sortVehicles: (state, action: PayloadAction<{ field: keyof Vehicle | 'petrol' | 'diesel'; order: 'asc' | 'desc' }>) => {
			const { field, order } = action.payload;

			if (field === 'petrol') {
				state.vehicles = state.vehicles.filter(vehicle => vehicle.fuel.toLowerCase() === 'petrol');
			} else if (field === 'diesel') {
				state.vehicles = state.vehicles.filter(vehicle => vehicle.fuel.toLowerCase() === 'diesel');
			} else {

				state.vehicles.sort((a, b) => {
					let comparison = 0;

					const valueA = a[field];
					const valueB = b[field];

					if (valueA !== undefined && valueB !== undefined) {
						if (valueA < valueB) {
							comparison = -1;
						} else if (valueA > valueB) {
							comparison = 1;
						}
					}

					return order === 'asc' ? comparison : -comparison;
				});
			}
		},
		filterByBidAndPriceRange: (state, action: PayloadAction<{
			bidStartDate?: string | null;
			bidOutDate?: string | null;
			priceRange?: number | null
		}>) => {
			const { bidStartDate, bidOutDate, priceRange } = action.payload;


			const parseDate = (dateString: string) => {
				return new Date(dateString.replace(/[/]/g, '-'));
			};


			const bidStartDateTime = bidStartDate ? new Date(bidStartDate).getTime() : null;
			const bidOutDateTime = bidOutDate ? new Date(bidOutDate).getTime() : null;

			state.vehicles = state.vehicles.filter(vehicle => {
				const auctionDate = parseDate(vehicle.auctionDateTime).getTime();

				if (bidStartDateTime !== null && bidOutDate === null) {

					return auctionDate >= bidStartDateTime && (priceRange === null
						// @ts-expect-error
						|| priceRange === 0 || vehicle.startingBid <= priceRange);
				}


				if (bidOutDate !== null && bidStartDate === null) {

					return auctionDate <= bidOutDateTime! && (priceRange === null
						// @ts-expect-error
						|| priceRange === 0 || vehicle.startingBid <= priceRange);
				}


				if (bidStartDateTime !== null && bidOutDateTime !== null) {

					return auctionDate >= bidStartDateTime &&
						auctionDate <= bidOutDateTime && (priceRange === null ||
							// @ts-expect-error
							priceRange === 0 || vehicle.startingBid <= priceRange);
				}



				if (bidStartDate === null && bidOutDate === null && priceRange !== null && priceRange !== 0) {
					// @ts-expect-error
					return vehicle.startingBid <= priceRange;
				}
				return true;
			});
		},
		toggleFavourite: (state, action) => {
			const id = action.payload;			
			const index = state.favourites.indexOf(id);
			if (index !== -1) {
					console.log('Removing from favourites');
					state.favourites.splice(index, 1);
			} else {
					console.log('Adding to favourites');
					state.favourites.push(id);
			}
	},
		resetSuggestions: (state) => {
			state.suggestions = [];
		},
		resetData: (state) => {
			return {
				...state,
				vehicles: updatedVehicles,
			};
		},
		RESET: () => initialState,
	},
});

export const {
	filterVehicles,
	sortVehicles,
	filterByBidAndPriceRange,
	resetData,
	toggleFavourite,
	RESET,
} = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
