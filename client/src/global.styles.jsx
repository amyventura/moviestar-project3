import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
	width:100vw;
	min-height:100vh;
	font-family: 'Verdana';
	margin:0 auto!important;
	overflow-x:hidden;
	padding:0px 0px;
			@media screen and (max-width: 800px) {
			padding-top:0;
		  	/* max-width:97vw; */
		  	padding:0 0px;
	overflow-x:hidden;
	}
}

a {
	text-decoration: none;
	color: #fff;
}
a:hover{
	color:#fff;
	text-decoration:none;
}

* {
	box-sizing: border-box;
}
`;
