import { createGlobalStyle } from "styled-components";

import 'react-circular-progressbar/dist/styles.css'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    body{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        background-color: #7159c1;
        text-rendering: optimizedLegibility;
        -webkit-font-smoothing: antialised; 
    }

    html, body, #root{
        width: 100vw;
        height: 100vh;
    }
`