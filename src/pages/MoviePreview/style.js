import styled from "styled-components";

export const Container = styled.div`

grid-template-areas: 
  "header"
  "content";
`

export const Box = styled.div`
 display: flex;
 align-items: flex-start;
 width: 113.7rem;
 margin: auto;
 margin-top: 5rem;
`

export const Main = styled.main`
 width: 113.6rem;
 height: 40rem;
 margin: auto;
 grid-area: content;
 overflow-y: auto;
 padding-right: 1rem;


 display: flex;
 flex-direction: column;

 &::-webkit-scrollbar {
  width: .8rem; 
}
&::-webkit-scrollbar-track {
  background: none; 
  border-radius: .8rem; 
}
&::-webkit-scrollbar-thumb {
  background: #FF859B;
  border-radius: .8rem; 
}
&::-webkit-scrollbar-thumb:hover {
 background-color: #FF6883;
}
`

export const Functions = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 36.8rem;

`

export const Titles = styled.div`
margin-top: 3rem;
display: flex;
align-items: center;
gap: 1rem;

h2 {
 font-size: 3.2rem;
 font-weight: normal;
 white-space: nowrap;
 color: #F4EDE8;
}

> div {
 width: 20rem;
 height: 2.5rem;
}
`

export const Info = styled.div`
> img {
 width: 1.6rem;
 height: 1.6rem;
 border-radius: 50%;
 cursor: pointer;
}

span {
 font-family: 'Roboto', sans-serif;
 font-size: 1.6rem;
 font-weight: 400;
 color: #F4EDE8;

 display: flex;
 align-items: center;
 gap: .5rem;

 svg {
 width: 1.6rem;
 height: 1.6rem;
 color: #FF859B;
}
}

margin-top: 3rem;
display: flex;
align-items: center;
gap: 1rem;
`

export const Tags = styled.div`
margin-top: 4rem;

display: flex;
align-items: center;
flex-wrap: wrap;
gap: 1rem;

width: 40rem;
`

export const Texts = styled.div`
margin-top: 5rem;

> p {
font-size: 1.6rem;
font-weight: normal;
color: #F4EDE8;
}
`