import styled from "styled-components";

export const Container = styled.div`
grid-area: header;

width: 100%;
height: 11.6rem;
border-bottom: 1px solid #3E3B47;

display: flex;
align-items: center;
justify-content: center;
gap: 8rem;

h2 {
 font-size: 2.4rem;
 font-weight: bold;
 color: #FF859B;
}

@media (max-width: 430px){
 height: 10rem;
 padding: 2rem;

 gap: 4rem;
 justify-content: flex-end;
 flex-direction: row-reverse;

}

`
//////////////////////////////////////
export const Search = styled.div`
width: 63rem;
margin-top: 1rem;

div {
 > input {
 width: 100%;
 }
}

@media (max-width: 430px){
 display: none;
}
`
//////////////////////////////////////
export const Profile = styled.div`
display: flex;
align-items: center;
gap: 1rem;

img {
 width: 6.4rem;
 height: 6.4rem;
 border-radius: 50%;
 border: 1px solid #3E3B47;
}

div {
display: flex;
flex-direction: column;
align-items: flex-end;

strong {
font-size: 1.4rem;
font-weight: bold;
color: #F4EDE8;
cursor: pointer;
}

span {
font-size: 1.4rem;
font-weight: normal;
color: #948F99;
cursor: pointer;
transition: .3s ease-in;
}

span:hover {
filter: brightness(50%);
}
}

@media (max-width: 430px){
display: none;
}
`

export const MobalMenu = styled.div`
z-index: 10;

label {
  display: flex;
  flex-direction: column;
  width: 50px; 
  cursor: pointer;
}

label span {
  background: #FF859B;
  border-radius: 10px;
  height: .5rem; 
  margin: .4rem 0; 
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

span:nth-of-type(1) {
  width: 40%; 
}

span:nth-of-type(2) {
  width: 80%; 
}

span:nth-of-type(3) {
  width: 50%;
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"]:checked ~ span:nth-of-type(1) {
  transform-origin: bottom;

  transform: rotatez(45deg) translate(.4rem, -.1rem);
}

input[type="checkbox"]:checked ~ span:nth-of-type(2) {
  transform-origin: top;
  transform: rotatez(-45deg);
   width: 85%;
}

input[type="checkbox"]:checked ~ span:nth-of-type(3) {
  transform-origin: bottom;
  width: 50%;
  transform: translate(1.5rem, -1rem) rotatez(45deg); 
}

@media (min-width: 460px){
 display: none;
}
`


