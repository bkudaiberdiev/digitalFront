import {createAsyncThunk} from "@reduxjs/toolkit";
import {getCitiesReq} from "../../../api";
import {ICityItem} from "../index";

export const getCitiesAction = createAsyncThunk(
	"city/getCities",
	async (_, thunkAPI) => {
		try {
			const response = await getCitiesReq();
			return response.data;
		} catch (e: any) {
			return e.message
		}
	},
);
