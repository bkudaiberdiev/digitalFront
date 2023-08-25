import React, {useState} from 'react';
// @ts-ignore
import classes from "./Calendar.module.scss"
import "./date-picker.scss"
import {useActions} from "../../hooks/useActions";
import {useAppSelector} from "../../hooks/redux";
import DatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";
import {Checkbox} from "antd";

function Calendar() {
	const {citiesSliceAction} = useActions()
	const {citiesParams} = useAppSelector((state) => state.cityReducer)
	const [isChecked, setIsChecked] = useState<boolean>(false)
	const handleChange = (dates: [Date, Date]) => {
		if (!isChecked && Array.isArray(dates)) {
			const [start, end] = dates;
			citiesSliceAction.setCitiesParams({ ...citiesParams, startDate: start, endDate: end})
		} else {
			citiesSliceAction.setCitiesParams({ ...citiesParams, startDate: dates, endDate: null})
		}
	}
	const onChange = (e: any) => {
		setIsChecked(e.target.checked)
		citiesSliceAction.setCitiesParams({ ...citiesParams, startDate: null, endDate: null})
	}
	return (
		<div className={`${classes.calendar} ${isChecked ? classes.calendar_end : ""}`}>
			<span className={`${classes.calendar_label}`}>Дата</span>
			<DatePicker
				locale={ru}
				minDate={new Date()}
				selected={citiesParams.startDate}
				startDate={citiesParams.startDate}
				endDate={citiesParams.endDate}
				onChange={handleChange}
				dateFormat="dd.MM.yyyy hh:mm:ss"
				placeholderText="Выберите дату"
				selectsRange={!isChecked}
			>
				<Checkbox onChange={onChange} className="custom-checkbox">Без конечной даты</Checkbox>
			</DatePicker>
		</div>
	);
}

export default Calendar;