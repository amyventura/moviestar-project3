import styled from 'styled-components';



export const Group = styled.div`
	position: relative;
    margin: 45px 0;
    
`;



export const FormInputField = styled.input`
	background: none;
background-color:rgb(51,51,51);border-radius:8px;
height:50px;
	color:#fff;
	font-size: 22px;
	caret-color: transparent;
padding-right:20px;
padding-left:20px;
padding-top:16px;
max-width:100%;
width:100%;
	display: block;
	border: none;
	border-radius: 4px;
	margin: 25px 0;
	&:focus {
		outline: none;
	}
	@media screen and (max-width:600px){
		height:40px;
		font-size:16px;
	}
`;

export const FormInputLable = styled.label`
	color: #FFF;
	font-size: 18px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 10px;
    top: 50%;
    transform:translateY(-50%);
	transition: 300ms ease all;
	${FormInputField}&:focus {
        top: 0%;
        
    transform:translateY(0%);
		font-size: 18px;
		color: gray;
	}
	${FormInputField}&:focus {
		fill: rebeccapurple;
	}
	${({ length }) =>
		length &&
		`
        top: -14px;
  font-size: 18px;
  color: gray;
    `}
`;

