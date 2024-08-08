import styled from "styled-components";

export const Container = styled.div`

`

export const Title = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

width: 113.7rem;
margin: auto;
margin-top: 3rem;

h2 {
font-size: 3.2rem;
font-weight: normal;
color: #FFFFFF;
}

button {
 display: flex;
 align-items: center;
 gap: .5rem;
 width: 20.7rem;
 padding: 0rem 3.2rem;

 svg {
 font-size: 2rem;
 color: #000000;
 }
}
`

export const Main = styled.main`
display: flex;
flex-direction: column;
gap: 2.4rem;

width: 113.7rem;
height: 40rem;

margin: auto;
margin-top: 4rem;
padding-right: 1rem;
overflow-y: auto;

h2 {
 display: none;
 font-size: 2.5rem;
 font-weight: normal;
 color: #FFFFFF;
 opacity: .7;
}

&[data-have-movies="false"]{
h2 {
 display: flex;
}
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

export const Movie = styled.div`
display: flex;
flex-direction: column;
gap: 1.5rem;

width: 100%;
height: 22.2rem;

padding: 3.2rem;
background-color: #ff859b0c;
border-radius: 1.6rem;
transition: .3s ease-in;
cursor: pointer;

&:hover {
filter: brightness(80%);
}

.title {
 display: flex;
 flex-direction: column;
 gap: .8rem;

 h3 {
 font-size: 2.4rem;
 font-weight: bold;
 color: #F4EDE8;

 }

 :nth-child(2){
 height: 1.2rem;
 width: 8.4rem;
 }
}

.description {
 width: 105.7rem;
 height: 4rem;
 overflow: hidden;

 .p {
 font-family: 'Roboto', sans-serif;
 font-size: 1.6rem;
 font-weight: normal;
 color: #999591;

 display: -webkit-box; 
 -webkit-box-orient: vertical; 
 overflow: hidden;
 -webkit-line-clamp: 2;
 text-overflow: ellipsis;
 }


}

.tags {
 div:hover {
 transition: .3s ease-in;
 filter: brightness(80%);
 }
     
 display: flex;
 align-items: center;
 gap: .8rem;

 width: 100%;
 height: 2.4rem;

 overflow: hidden;
 }
`