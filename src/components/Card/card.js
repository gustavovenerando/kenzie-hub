import styled from "styled-components";

export const ThemeLi = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: var(--black);
	min-height: 50px;
	padding: 0px 12px;
	border-radius: 4px;

	&:hover {
		background: var(--dark_grey);
		cursor: pointer;
	}

	&:hover > span {
		color: var(--light_grey);
	}

	p {
		color: var(--light_grey);
		font-weight: 700;
		font-size: 14.2123px;
		line-height: 24px;
	}

	span {
		color: var(--grey);
	}
`;
