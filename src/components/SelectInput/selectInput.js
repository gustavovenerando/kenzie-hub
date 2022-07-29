import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	label {
		color: var(--light_grey);
		font-weight: 400;
		font-size: 12px;
		line-height: 0px;
	}
`;

export const InputContainer = styled.div`
	height: 39px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background: var(--dark_grey);
	padding: 5px 13.0293px;
	border-radius: 3.20867px;

	&:focus-within {
		outline: 0.9772px solid #f8f9fa;
	}

	select {
		width: 100%;
		background: none;
		color: var(--grey);
		font-weight: 400;
		font-size: 14px;
		line-height: 21px;

		&::placeholder {
			font-weight: 400;
			font-size: 14px;
			line-height: 21px;
			color: var(--grey);
		}

		&:focus {
			color: var(--light_grey);
		}

		option {
			background: var(--dark_grey);
		}
	}
`;
