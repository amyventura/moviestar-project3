import styled from 'styled-components';


export const Container=styled.div`
width:450px;
min-width:450px;
max-width:450px;
max-height:686px;
min-height:530px;
padding:50px 68px;
background-color: rgba(0, 0, 0, 0.75);
margin:0 auto;
/* margin-top:100px;     */
/* transform:translateY(-100%); */
border-radius:4px;
position:relative;  
margin-bottom:0px; 
@media screen and (max-width:600px){
    max-width:100vw;
    width:100%;
    min-width:0px;
    padding:10px 15px;
    height:fit-content;
    min-height:0px;
}
.upper{
    width:100%;
}
.lower{
    margin-top:20px;
    color:#fff;
    font-size:18px;
    .icon{
        width:30px;
    }
    .description{
        margin-top:70px;
    }
    .to-signup{
        margin-top:20px;
        .gray{
            color:gray;
            font-size:15px;
        }
        .signup{
            font-size:15px;
            font-weight:bold;
            margin-left:10px;
            @media screen and (max-width:600px){
                font-size:16px;
            }
        }
    }
}
.service{
    width:100%;
    display:flex;
    justify-content:space-between;
}
`


export const Header=styled.span`
color:#fff;
font-size:32px;
font-weight:bold;
@media screen and (max-width:600px){
    font-size:25px;
}
`

export const Button=styled.button`
width:100%;
height:50px;
border:none;
background-color: #202e35;
color:#ffff;
text-align:center;
border-radius:4px;
font-size:18px;
outline:none;
cursor:pointer;

`