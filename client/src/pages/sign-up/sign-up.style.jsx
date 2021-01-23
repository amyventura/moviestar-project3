import styled from 'styled-components';


export const Container=styled.div`
width:450px;
min-width:450px;
max-width:450px;
max-height:686px;
min-height:686px;
padding:50px 68px;
background-color: rgba(0, 0, 0, 0.75);
margin:0 auto;
/* margin-top:100px;     */
/* transform:translateY(-100%); */
border-radius:4px;
position:relative;  
margin-bottom:0px; 
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
            font-size:22px;
        }
        .signup{
            font-size:22px;
            font-weight:bold;
            margin-left:10px;
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
`

export const Button=styled.button`
width:100%;
height:50px;
border:none;
background-color: #e95c17;
color:#ffff;
text-align:center;
border-radius:4px;
font-size:18px;
outline:none;
cursor:pointer;
`