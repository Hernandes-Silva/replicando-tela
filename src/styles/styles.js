import styled from "styled-components";
import { textSilverColor } from "../pages/home/variables";


export const TextFooter = styled.p`
    color:${textSilverColor};
    margin-top:1vw;
    cursor: pointer;
    font-weight:bold;
    font-size: 1.5vw !important;
    @media (min-width: 768px) {
        font-size: 1.1vw !important;
    }
`