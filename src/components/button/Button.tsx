import React from 'react';
// @ts-ignore
import classes from "./Button.module.scss"

interface IButtonProps {
	text: string;
	width?: number;
	height?: number;
	onClick?: () => void;
}
function Button({text, width, height, onClick}: IButtonProps) {
	return (
		<button
			onClick={() => {
				if (onClick) {
					onClick()
				}
			}}
			style={{width, height}}
			className={classes.button}
		>
			{text}
		</button>
	);
}

export default Button;