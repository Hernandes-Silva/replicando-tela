import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    
    body {
        font-family: sans-serif;
        font-size: 2vw !important;
        @media (min-width: 768px) {
            font-size: 1.4vw !important;
        }
    }
    button{
        font-size: 2vw !important;
        @media (min-width: 768px) {
            font-size: 1.4vw !important;
        }
    }
    input {
        font-family: sans-serif;
        font-size: 1.8vw !important;
        @media (min-width: 768px) {
            font-size: 1.1vw !important;
        }
    }

` 