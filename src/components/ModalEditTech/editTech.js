import styled from "styled-components";

export const Modal = styled.div`
	position: fixed;
	width: 100%;
	max-width: 370px;
	z-index: 1;
	padding: 5px;

	button {
		height: 47px;
	}

	h1 {
		color: var(--light_grey);
		font-weight: 700;
		font-size: 16px;
		line-height: 24px;
	}
`;

export const Header = styled.div`
	display: flex;
	z-index: 10;
	justify-content: space-between;
	align-items: center;
	background: var(--dark_grey);
	height: 50px;
	border-radius: 4px 4px 0px 0px;
	padding: 0px 15px;

	.exit_button {
		height: 20px;
		width: 20px;
		vertical-align: center;
		background: transparent;
		color: var(--grey);

		&:hover {
			color: var(--white);
		}
	}
`;

export const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	gap: 7px;
	background: var(--light_black);
	padding: 30px 14px 30px 15px;
	border-radius: 0px 0px 4px 4px;

	span {
		font-size: 12px;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 15px;
	justify-content: space-between;
`;
