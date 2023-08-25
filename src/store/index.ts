import { configureStore } from '@reduxjs/toolkit';
import citiesSlice from "./cities"
const store = configureStore({
	reducer: {
		cityReducer: citiesSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
