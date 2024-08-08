import styled from "styled-components";
import backgroundImg from '../../assets/Background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

`

export const Main = styled.div`
  padding: 0 12.2rem;
  width: 58rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
 

  :nth-child(5){
    margin-bottom: 0;
  }
  :nth-child(6){
    margin-bottom: 4rem;
  }

h1 {
color: #FF859b;
font-size: 4.8rem;
font-weight: bold;
}

h2 {
 color: #F4EDE8;
 font-size: 2.4rem;
 font-weight: 500;

 margin-bottom: 5rem;
}

p {
color: #CAC4CF;
font-size: 1.4rem;
font-weight: normal;

margin-bottom: 5rem;
}

a {
 text-decoration: none;
}
`

export const Form = styled.form`

`

export const Background  = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
