import styled from "styled-components";

export const Container = styled.div`

`
export const Box = styled.div`
 display: flex;
 align-items: flex-start;
 width: 113.7rem;
 margin: auto;
 margin-top: 5rem;
`

export const Main = styled.main`
overflow-y: auto;
height: 45rem;
width: 113.7rem;

display: flex;
flex-direction: column;
gap: 4rem;

padding-right: 1rem;
margin: auto;

h2 {
margin-top: 3rem;
font-size: 3.6rem;
font-weight: 500;
color: #F4EDE8;
}

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

export const FistInputs = styled.div`
display: flex;
align-items: center;
gap: 4rem;
width: 100%;

#InputNumber {
 color: red;
 background-color: red;
}
`

export const SecondInput = styled.div`
width: 100%;

textarea {
 width: 100%;
 height: 27.4rem;

 border-radius: 1rem;
 border: none;
 outline: none;
 padding: 1.9rem 1.6rem;
 background-color: #262529;

 font-size: 1.6rem;
 font-weight: normal;
 color: #F4EDE8;
 resize: none;

 &::placeholder{
 font-family: 'Roboto', sans-serif;
 font-size: 1.6rem;
 font-weight: normal;
 color: #948F99;
 }
}
`

export const Marcs = styled.div`
display: flex;
flex-direction: column;
gap: 2.4rem;

h3 {
font-size: 2rem;
font-weight: normal;
color: #999591;
}
`
export const Marcadores = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
gap: 2.4rem;

width: 100%;

background-color: #0D0C0F;
border-radius: .8rem;
padding: 1.6rem;
`

export const NewMarc = styled.div`
display: flex;
align-items: center;
gap: 1.6rem;

width: auto;
height: 5.6rem;

border-radius: 1rem;
background: transparent;
padding: 1.6rem;
border: 2px dashed #948F99;

input {
 border: none;
 width: 11rem;
 outline: none;

 background: transparent;
 font-family: 'Roboto', sans-serif; 
 font-size: 1.6rem;
 font-weight: normal;
 color: #FFFFFF
}

input::placeholder {
font-family: 'Roboto', sans-serif; 
 font-size: 1.6rem;
 font-weight: normal;
 color: #948F99;  
}

svg {
font-size: 2.4rem;
color: #FF859B;
cursor: pointer;
}
`

export const Marc = styled.div`
display: flex;
align-items: center;
gap: 1.6rem;

border-radius: 1rem;
background-color: #262529;
padding: 1.6rem;

transition: .3s ease-in;

&:hover {
filter: brightness(80%);
}

p {
 font-family: 'Roboto', sans-serif; 
 font-size: 1.6rem;
 font-weight: normal;
 color: #FFFFFF;
}

svg {
font-size: 2.4rem;
color: #FF859B;
cursor: pointer;
}
`

export const Buttons = styled.div`
display: flex;
align-items: center;
gap: 4rem;

:nth-child(1) {
width: 100%;
height: 5.6rem;
margin-top: 2rem;

background-color: #0D0C0F;
color: #FF859B;
font-size: 1.6rem;
font-weight: normal;
border-radius: 1rem;
border: none;
cursor: pointer;
transition: .3s ease-in;

&:hover {
 background-color: #0A090B;
 color: white;
}

&:disabled {
    opacity: 0.5;
}
}
`