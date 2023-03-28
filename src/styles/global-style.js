import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    body{
        background-color: #111;
    }

    h1,h2,h3,h4,h5,h6,p,span,li,img{
        color: #f5f5f5;
    }

    ul{
        list-style: none;
    }

    a, label{
        text-decoration: none;
        color: #f5f5f5;
    }
`

export { GlobalStyle }