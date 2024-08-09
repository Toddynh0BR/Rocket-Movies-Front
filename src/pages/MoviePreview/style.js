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

 @media (max-width: 430px){
  width: 35rem;
  margin: 0;
  margin-top: 5rem;
  margin-left: 2rem;
 }
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

@media (max-width: 430px){
 height: 100%;
 width: 100%;

 margin-bottom: 5rem;
}
`

export const Functions = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 36.8rem;

@media (max-width: 430px){
 width: 100%;
}
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

@media (max-width: 430px){
 flex-direction: column;
 align-items: flex-start;
 padding-left: 1rem;

 h2 {
 padding-left: 1rem;
 }
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

@media (max-width: 430px){
 margin-left: 2rem;
}
`

export const Tags = styled.div`
margin-top: 4rem;

display: flex;
align-items: center;
flex-wrap: wrap;
gap: 1rem;

width: 40rem;

@media (max-width: 430px){
 width: 34rem;
 padding: 0rem 2rem 0rem 2rem;
}
`

export const Texts = styled.div`
margin-top: 5rem;

> p {
font-size: 1.6rem;
font-weight: normal;
color: #F4EDE8;
}

@media (max-width: 430px){
 width: 100%;
 padding: 0rem 2rem 0rem 2rem;
}
`