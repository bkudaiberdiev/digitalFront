import React from 'react';
interface IInputFieldProps {
	placeholder?: string;
	onChange?: (event: any) => void;
	label?: string;
}
const InputFields = React.forwardRef(({
	placeholder,
	onChange,
	label,
}: IInputFieldProps, ref) => {
	return (
		<label>
			{label && <span>{label}</span>}
			<input placeholder={placeholder} onChange={(event) => {
				onChange && onChange(event)
			}} />
		</label>
	);
})

export default InputFields;