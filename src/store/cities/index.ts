import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getCitiesAction} from "./actions";

export interface ICityItem {
	value: string;
	label: string;

}
interface ICitiesState {
	cities: ICityItem[];
	isLoading: boolean,
	error: string,

	citiesParams: {
		startDate: Date | null;
		endDate: Date | null;
		from: string;
		to: string;
	}
}

const initialState: ICitiesState = {
	cities: [],
	isLoading: false,
	error: "",
	citiesParams: {
		startDate: null,
		endDate: null,
		from: "",
		to: "",
	}
};

export const citiesSlice = createSlice({
	name: 'cities',
	initialState,
	reducers: {
		setCitiesParams: (state, action) => {
			state.citiesParams = action.payload;
		}
	},
	extraReducers: {
		[getCitiesAction.pending.type]: (state) => {
			state.isLoading = true;
			state.error = "";
		},
		[getCitiesAction.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		[getCitiesAction.fulfilled.type]: (state, action: PayloadAction<ICityItem[]>) => {
			state.isLoading = false;
			state.cities = action.payload;
		},
	}
});

export default citiesSlice.reducer;
