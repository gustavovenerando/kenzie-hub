import { ThemeButton } from "./button";

function Button({ color, text, onClick, margin_top, width, type }) {
	return (
		<ThemeButton
			color={color}
			onClick={onClick}
			margin_top={margin_top}
			width={width}
			type={type}
		>
			{text}
		</ThemeButton>
	);
}

export default Button;
