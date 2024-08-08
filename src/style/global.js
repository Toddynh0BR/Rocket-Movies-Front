import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 font-family: "Roboto Slab", serif;
}

:root{
 font-size: 62.5%;
}

body {
 background-color: #1C1B1E;
}

a {
 text-decoration: none;
}
`