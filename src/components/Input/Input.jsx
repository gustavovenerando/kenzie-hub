import { Container, InputContainer } from "./input";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

function Input({
	label,
	name,
	type,
	setPasswordType,
	placeholder,
	register,
	showPassword,
	setShowPassword,
	error,
	events,
}) {
	function onClickShowPassword(event) {
		event.preventDefault();
		if (showPassword) {
			setShowPassword(false);
			setPasswordType("password");
		} else {
			setShowPassword(true);
			setPasswordType("text");
		}
	}

	return (
		<Container error={error}>
			<label>{label}</label>
			<InputContainer error={error} events={events}>
				<input
					placeholder={placeholder}
					{...register(name)}
					type={type}
				/>
				{name === "password" &&
					(showPassword ? (
						<button
							className="EyeIcon"
							onClick={onClickShowPassword}
						>
							<AiFillEyeInvisible size={20} />
						</button>
					) : (
						<button
							className="EyeIcon"
							onClick={onClickShowPassword}
						>
							<AiFillEye size={20} />
						</button>
					))}
			</InputContainer>
			{error && <span>{error}</span>}
		</Container>
	);
}

export default Input;
