import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --white: #FFFFFF;
        --light_grey:#F8F9FA; //grey-0
        --grey:#868E96; //grey-1
        --dark_grey: #343B41; //grey-2
        --light_black: #212529; //grey-3
        --black:#121214; //grey-4
        --pink: #FF577F;
        --dark_pink: #59323F;
    }

    body{
        background: var(--black);
        font-family: 'Inter', sans-serif;
    }
    
    .App{
        height:100vh;
        display:flex;
        justify-content:center;
        align-items: center;
    }

    button{
        cursor: pointer;
    }

    hr {
        position:fixed;
		background: var(--light_black);
		width: 100%;
		height: 2px;
        top: 70px;
	}
`;

export const ModalBackground = styled.div`
	width: 100vw;
	height: 100vh;
	z-index: 1;
	background: black;
	opacity: 0.5;
	position: absolute;
`;
