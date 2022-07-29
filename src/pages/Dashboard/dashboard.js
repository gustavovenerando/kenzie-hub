import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	max-width: 780px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 20px 10px 30px 10px;
	font-size: 12px;
	position: relative;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: ${(props) => props.margin_bottom};

	button {
		width: 80px;
		height: 30px;
		background: var(--light_black);
		font-weight: 600;
		font-size: 12px;
		line-height: 23px;
	}

	h1 {
		color: var(--pink);
	}

	h2 {
		color: var(--light_grey);
	}

	.add_button {
		width: 32px;
		height: 32px;
		border-radius: 4px;
		background: var(--light_black);
		color: var(--white);
		line-height: 0;

		&:hover {
			background: var(--grey);
		}
	}
`;

export const Introduction = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;
	gap: 15px;

	& > hr {
		position: relative;
		top: 0;
	}

	.intro_content {
		display: flex;
		flex-direction: column;
		gap: 15px;

		h1 {
			width: 100%;
			color: var(--light_grey);
		}

		p {
			color: var(--grey);
			font-size: 13px;
		}

		@media (min-width: 760px) {
			flex-direction: row;
			justify-content: space-between;

			h1 {
				max-width: 450px;
			}

			p {
				display: flex;
				align-items: center;
			}
		}
	}
`;

export const Content = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 25px;
	border-radius: 4px;
`;

export const Content_List_Container = styled.ul`
	display: flex;
	flex-direction: column;
	height: 600px;
	padding: 5px;
	background: var(--light_black);
	padding: 20px 5px 15px 5px;
	list-style: none;
	overflow-y: auto;
	overflow-x: none;
	border-radius: 4px;
	gap: 15px;

	@media (max-width: 760px) {
		height: 540px;
	}
`;
