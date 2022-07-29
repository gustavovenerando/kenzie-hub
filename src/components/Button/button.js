import styled from "styled-components";

export const ThemeButton = styled.button`
	height: 39px;
	background-color: ${(props) =>
		props.color === "pink" ? "#59323F" : "#343B41"};
	color: ${(props) => (props.color === "pink" ? "#FFFFFF" : "#F8F9FA")};
	text-align: center;
	vertical-align: center;
	font-weight: 600;
	font-size: 14px;
	line-height: 21px;
	border-radius: 4.06066px;
	margin-top: ${(props) => props.margin_top};
	width: ${(props) => props.width};

	&:hover {
		background-color: ${(props) =>
			props.color === "pink" ? "#FF577F" : "#868E96"};
	}
`;
