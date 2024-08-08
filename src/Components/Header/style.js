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
`
