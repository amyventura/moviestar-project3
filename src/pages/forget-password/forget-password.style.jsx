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
margin-top:100px;
/* transform:translateY(-65%); */
border-radius:4px;
position:relative;  
color:#ffff;
font-size:22px;
display:flex;
flex-direction:column;
justify-content:space-between;
@media screen and (max-width:600px){
    max-width:100vw;
    width:100%;
    min-width:0px;
    padding:10px 15px;
    height:fit-content;
    min-height:500px;
}
.radios{
    display:flex;
    flex-direction:column;
}
.upper{
    width:100%;
    border:2px solid red
}
.radio-btn{
    /* border: 0px; */
    width: 25px;
    height: 25px;
    margin-top:10px;
}
.title{
    font-size:22px;
    margin-left:20px
}
.recovery{
    height:50px;
background-color:rgb(51,51,51);border-radius:8px;
padding-left:20px;
font-size:22px;
    color:#fff;
    border-radius:4px;
    border:none;
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
font-size:22px;
font-weight:bold;
`

export const Button=styled.button`
width:100%;
height:50px;
border:none;
background-color: #6A0DAD;
color:#ffff;
text-align:center;
border-radius:4px;
font-size:18px;
outline:none;
`