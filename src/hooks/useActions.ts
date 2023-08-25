import { bindActionCreators } from "@reduxjs/toolkit";

import { citiesSlice } from "../store/cities";
import * as citiesActions from "../store/cities/actions";
import { useAppDispatch } from "./redux";

const actions = {
	citiesSliceAction: citiesSlice.actions,
	citiesActions,
};

export function useActions(): typeof actions {
	const dispatch = useAppDispatch();
	return Object.entries(actions).reduce(
		(prev: any, cur: any) => ({
			...prev,
			[cur[0]]: bindActionCreators(cur[1], dispatch),
		}),
		{},
	);
}
