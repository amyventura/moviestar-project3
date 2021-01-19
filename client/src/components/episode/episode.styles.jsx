import styled from 'styled-components';


export const Container=styled.div`
height:200px;
width:100%;
padding:50px 50px;
display:grid;
grid-template-columns:30px 140px 1fr;
grid-gap:20px;
background-color:${(props) =>
    props.active ? "transparent ": "rgb(51, 51, 51)" };

margin-top:10px;
border-bottom:1px solid gray;
@media screen and (max-width:800px){
    grid-template-columns:20px 80px 1fr;
    padding:10px;
    height:140px
}
.ep__img{
width:100%;

}

`   