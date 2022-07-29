import { Container, InputContainer } from "./selectInput";

function SelectInput({ label, name, register, optionData }) {
	return (
		<Container>
			<label>{label}</label>
			<InputContainer>
				<select {...register(name)}>
					{optionData?.map((data, index) => (
						<option key={index} value={data.value}>
							{data.text}
						</option>
					))}
				</select>
			</InputContainer>
		</Container>
	);
}

export default SelectInput;
