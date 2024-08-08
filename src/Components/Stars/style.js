import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 100%;
position: relative;
gap: .3rem;

.yes1, .yes2, .yes3, .yes4, .yes5{
 display: none;
}

&[data-rating="1"]{
.yes1 {
 display: flex;
}
.no1 {
 display: none;
}
}
&[data-rating="2"]{
.yes1, .yes2 {
 display: flex;
}
.no1, .no2 {
 display: none;
}
}
&[data-rating="3"]{
.yes1, .yes2, .yes3 {
 display: flex;
}
.no1, .no2, .no3 {
 display: none;
}
}
&[data-rating="4"]{
.yes1, .yes2, .yes3, .yes4 {
 display: flex;
}
.no1, .no2, .no3, .no4 {
 display: none;
}
}
&[data-rating="5"]{
.yes1, .yes2, .yes3, .yes4, .yes5 {
 display: flex;
}
.no1, .no2, .no3, .no4, .no5 {
 display: none;
}
}


svg {
 width: 100%;
 height: 100%;
 color: #FF859B;
}
`