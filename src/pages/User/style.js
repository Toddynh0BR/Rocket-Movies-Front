import styled from 'styled-components';

export const Container = styled.div`
`

export const Header = styled.header`
background-color: #ff859b0c;

height: 14.4rem;
width: 100%;

:first-child{
:first-child {
 margin-top: 0;
}
  margin-top: 5rem;
}

display: flex;
justify-content: space-between;
align-items: flex-start;
padding-left: 15rem;

`

export const Avatar = styled.div`
width: 18.6rem;
height: 18.6rem;
position: relative;

margin: -12.4rem auto 3.2rem;

img {
width: 18.6rem;
height: 18.6rem;
border-radius: 50%;
z-index: 9999;
}

> label {
    width: 48px;
    height: 48px;

    background-color: #FF859B;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;
    transition: .3s ease-in;
    cursor: pointer;

    &:hover {
    background-color: #FF6883;
    
    svg {
        color: white;
    }
    }

    input {
      display: none;
    }

    svg {
      transition: .3s ease-in;
      width: 20px;
      height: 20px;
      color: #312E38;
    }
  }
`

export const Form = styled.form`
width: 34rem;

margin: auto;


 > div:nth-child(4){
 margin-top: 2rem;
}
`