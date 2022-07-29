import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	max-width: 370px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 20px 10px 0px 10px;
	font-size: 12px;

	h1 {
		color: var(--pink);
		align-self: center;
	}
`;

export const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
	background: var(--light_black);
	padding: 30px 14px 30px 15px;
	border-radius: 4px;
	position: relative;

	h2 {
		color: var(--light_grey);
		align-self: center;
		margin-bottom: 25px;
	}

	p {
		position: absolute;
		bottom: 72px;
		font-weight: 600;
		font-size: 11px;
		line-height: 14px;
		align-self: center;
		color: var(--grey);
	}
`;
