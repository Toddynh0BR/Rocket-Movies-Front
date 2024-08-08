import styled from "styled-components";

export const Container = styled.button`
width: 100%;
height: 5.6rem;
margin-top: 2rem;

background-color: #FF859B;
color: #312E38;
font-size: 1.6rem;
font-weight: normal;
border-radius: 1rem;
border: none;
cursor: pointer;
transition: .3s ease-in;

svg {
    transition: .3s ease-in;
}

&:hover {
 background-color: #FF6883;
 color: white;
 svg {
 color: white;
 }
}

&:disabled {
    opacity: 0.5;
}
`