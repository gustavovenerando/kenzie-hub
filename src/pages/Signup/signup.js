import styled from "styled-components";

export const Header = styled.div`
	display: flex;
	justify-content: space-between;

	button {
		width: 80px;
		height: 30px;
		background: var(--light_black);
		font-weight: 600;
		font-size: 12px;
		line-height: 23px;
	}
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
	max-width: 370px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	padding: 30px 10px 0px 10px;
	font-size: 12px;

	h1 {
		color: var(--pink);
		align-self: center;
	}
`;

export const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	gap: 7px;
	background: var(--light_black);
	padding: 30px 14px 30px 15px;
	border-radius: 4px;

	h2 {
		color: var(--light_grey);
		align-self: center;
		margin-bottom: 5px;
	}

	p {
		bottom: 72px;
		font-weight: 600;
		font-size: 11px;
		line-height: 14px;
		align-self: center;
		color: var(--grey);
		margin-bottom: 15px;
	}
`;
