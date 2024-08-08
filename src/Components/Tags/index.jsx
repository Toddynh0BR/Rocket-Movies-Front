import React from "react";
import styled from 'styled-components';

const Container = styled.div`
height: 3rem;
padding: .8rem 1.8rem 1rem 1.8rem;
border-radius: .8rem;

display: flex;
align-items: center;

font-family: 'Roboto', sans-serif;
font-size: 1.2rem;
font-weight: normal;
color: #E5E5E5;
background-color: ${(props) => props.bgColor || 'lightblue'};

white-space: nowrap;
display: inline-block;
`

export function Tag({title, bgColor}){
 return(
   <Container bgColor={bgColor}>
    {title}
   </Container>
 )
}

