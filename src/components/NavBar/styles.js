import styled from "styled-components"
import { textLightColor } from "../../pages/home/variables"


export const NavBarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    
    border-bottom: 0.2vh solid rgba(255, 255, 255, 0.1);
`

export const Logo = styled.div`
    color:#fbf9fe;
    font-size:2.2vw;
    padding-top:2vh;
    padding-bottom:2vh;
    font-weight:bold;
    letter-spacing:0;
    @media (min-width: 768px) {
        font-size: 1.5vw !important;
    }
`
export const OptionsNav = styled.div`
    display:flex;
    flex-direction:row;
 
`
export const TextOptions = styled.div`
    display:flex;
    align-items:center;
    margin-left:1.5vw;
    margin-right:1.5vw;
    cursor: pointer;
    color:${textLightColor};
    font-size:1.9vw;
    @media (min-width: 768px) {
        font-size: 1.2vw !important;
    }

`