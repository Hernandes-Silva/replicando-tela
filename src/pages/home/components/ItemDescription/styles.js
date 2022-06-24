import styled from "styled-components";
import { textDarkColor, textLightColor, textSilverColor } from "../../variables";

export const ItemContainer = styled.div`
    padding-left:2vw;
    padding-right:2vw;
`
export const RoundDiv = styled.div`
    height:6vw;
    width:6vw;
    border-radius:50%;
    background-color: ${props => props.dark ? '#8367e6': '#e9f9f9'};
    display:flex;
    flex:1;
    align-items:center;
    p {
        color: ${props => props.dark ? '#b5b4f2': '#a398bf'};
        padding-left:3.5vw;
        font-size:4vw;
        font-weight:bold;
    }
`

export const ItemTitle = styled.p` 
    margin-top:10%;
    color: ${props => props.dark ? textLightColor: textDarkColor};
    font-weight:bold;
    font-size: 3vw !important;
    @media (min-width: 768px) {
        font-size: 1.8vw !important;
    }
`
export const ItemDescript = styled.p`
    width:80%;
    margin-top:5%;
    color: ${props => props.dark ? "silver" : textSilverColor};
`

export const AvatarProfileFacory = styled.img`
    display: inline-block;
    position:absolute;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0px 1vw 2vw 0px rgba(0,0,0,0.25);
`

export const AvatarLarge = styled(AvatarProfileFacory)`
    width: 10%;
`