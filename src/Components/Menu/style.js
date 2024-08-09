import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
width: 100%;

position: fixed;
z-index: 10;
top: 0;
left: -100%;

transition: .3s ease-in-out;

background-color: #1C1B1E;
border-right: 1px solid   #3E3B47;

header {
 width: 100%;
 height: 10rem;

 display: flex;
 align-items: center;
 justify-content: center;

 border-bottom: 1px solid #3E3B47;

 h2 {
 font-size: 2.4rem;
 font-weight: bold;
 color: #FF859B;
 }
}

main {
 width: 100%;
 padding: 2rem;

 gap: 2rem;
 display: flex;
 flex-direction: column;
}

.Profile {
 width: 100%;
 gap: 2rem;
 display: flex;
 align-items: center;
 justify-content: flex-start;



 img {
 width: 6.4rem;
 height: 6.4rem;
 border-radius: 50%;
 border: 1px solid #3E3B47;
 }

 div {
 display: flex;
 flex-direction: column;

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
 
 button {
 padding: 1rem;
 margin-top: 0;
 margin-left: 1rem;
 }
}

&[data-menu-open="true"]{
 left: 0;
}
`