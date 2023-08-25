import React from 'react';
import {Select} from "antd"
import {ICityItem} from "../../store/cities";
// @ts-ignore
import classes from "./DropdownSelect.module.scss"
import {useActions} from "../../hooks/useActions";
import {useAppSelector} from "../../hooks/redux";

interface IDropdownSelectProps {
	cities: ICityItem[];
	label: string;
	name: string;
}
function DropdownSelect({ cities, label, name }: IDropdownSelectProps) {
	const {citiesSliceAction} = useActions()
	const {citiesParams} = useAppSelector((state) => state.cityReducer)
	return (
		<div className={classes.dropdown}>
			<span className={classes.dropdown_label}>{label}</span>
			<Select
				showSearch
				style={{ width: "100%" }}
				className={classes.dropdown_select}
				onChange={(value) => {
					citiesSliceAction.setCitiesParams({
						...citiesParams,
						[name]: value
					})
				} }
				placeholder="Поиск"
				optionFilterProp="children"
				filterOption={(input, option) => (option?.label.toLowerCase() ?? '').includes(input.toLowerCase())}
				filterSort={(optionA, optionB) =>
					(optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
				}
				options={cities}
			/>
		</div>
	);
}

export default DropdownSelect;