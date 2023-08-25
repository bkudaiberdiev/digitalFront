import React from 'react';
// @ts-ignore
import classes from "./Search-form.module.scss"
import DropdownSelect from "../dropdown-select/Dropdown-select";
import {useAppSelector} from "../../hooks/redux";
import Button from "../button/Button";
import Calendar from "../calendar/Calendar";
import { toast } from "react-hot-toast";


function SearchForm() {
	const {cities, citiesParams} = useAppSelector((state) => state.cityReducer)
	const warning = (msg: string) => {
		toast.error(msg, {
			duration: 3000,
			position: "top-right"
		})
	}
	const handleSubmit = () => {
		if (!citiesParams.from) {
			return warning("Заполните поле откуда")
		}
		if (!citiesParams.to) {
			return warning("Заполните поле куда")
		}
		if (!citiesParams.startDate) {
			return warning("Заполните даты")
		}
		return toast.success("Ваши данные успешно записались")
	}
	return (
		<div className={classes.search}>
			<DropdownSelect cities={cities} label="Откуда" name="from" />
			<DropdownSelect cities={cities} label="Куда" name="to" />
			<Calendar />
			<Button onClick={handleSubmit} text="Найти" height={40} />
		</div>
	);
}

export default SearchForm;