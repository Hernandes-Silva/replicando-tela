import styled from "styled-components";
import { textDarkColor, textLightColor, textSilverColor } from "./variables";
import { GoCheck } from "react-icons/go";
export const DivGlobal = styled.div`
    overflow:hidden;
`
export const Padding = styled.div`
    padding-left:9vw;
    padding-right:9vw;
`
export const ContainerWelcome = styled.div`
    background-color:#5762e5;
    position:relative;
    z-index:1001;

`
export const Diagonal = styled.div`
    height:100%;
    width: 110%;
    top:1px;
    left:-5px;
    position:absolute;
    z-index:-1;
    border:0;
    background-color: white;
    clip-path: polygon(100% 65%, 100% 100%, 0 100%);
`

export const DivTitleAndCard = styled.div`
    margin-top:7vw;
    display:flex;
    flex-direction:row;
    flex:1;
`

export const LeftWelcome = styled.div`
    flex:5;
`

export const WelcomeTitle = styled.p`
    font-size:5vw;
    margin-top:2vh;
    margin-bottom:2vh;
    color:#fbf9fe;
    font-weight:bold;
    @media (min-width: 768px) {
        font-size: 4.2vw !important;
    }
`
export const TextLight = styled.p`
     color:${textLightColor};
`
export const RightWecolme = styled.div`
    flex:3;
    display:flex;
`

export const RoundIcon = styled.div`
    height:4vw;
    width:4vw;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    position:absolute;
    bottom:0;
    cursor: pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:white;
    border-radius:50%;
`


export const ContainerHowBuild = styled.div`
    margin-top:15%;
    display:flex;
    width:100%;
    padding-right:15vw;
    padding-left:7vw;
    flex-direction:row;
    align-self:center;
    flex:1;
    div {
        flex:1;
        display:flex;
        align-items:center;
        justify-content:center;
    }
`


export const ButtonWithoutBorder = styled.button`
    padding:1.5vw;
    cursor: pointer;
    border-radius:5px;
    border:1px solid silver;
    background-color:#f9f9f9;
    color:#9395b0;
`

export const Title = styled.p`
    font-size:5vw;
    margin-top:2vh;
    margin-bottom:2vh;
    color:${textDarkColor};
    font-weight:bold;
    @media (min-width: 768px) {
        font-size: 3vw !important;
    }
`

export const BottomHowBuild = styled.div`
    margin-top:6%;
    margin-bottom:5%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    
    flex:1;
`

export const ContainerAutomate = styled.div`
    margin-top:10%;
    display:flex;
    flex-direction:row;
    padding-left:8vw;
    flex:1;
    div {
        flex:4;
        padding-left:5vw;
        padding-right:9vw;
    }
    button {
        margin-top:2vw;
    }
`
export const AutomateImageContainer = styled.div`
    flex:5 !important;
    padding-left:0 !important;
    display:flex;
    align-items:center;
`
export const AutomateImage = styled.img`
    width:100%;
    height: auto;
    object-fit: cover;
`

export const GlobeICon = styled.img`
    width:20%;
    border-radius:1vw;
    box-shadow: 0px 2.5vw 1.5vw 0 rgba(0,0,0,0.1);
    height:auto;
    margin-bottom:5%;
`

export const TextSilver = styled.p`
    color:${textSilverColor};
    margin-top:5%;
    font-weight:400;
`
export const ContainerRated = styled.div`
    width:130%;
    padding-top:10%;
    margin-top:10%;
    background-color: #5762e5;
    height:auto;
    left: -15%;
    right: 0;
    position: relative;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const DivRated = styled.div`
    width:100vw;
    padding-bottom:7vw;
`
export const DivClick = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-left:10vw;
    padding-right:10vw;
    p {
        text-align:center;
    }
`
export const ClickIcon = styled.img`
    width:5vw;
    border-radius:1vw;
    height:auto;
    margin-bottom:5%;
`


export const DivYouDeserve = styled.div`
    display:flex; 
    flex-direction:column;
    position:relative;
    overflow:hidden;
    margin-top:-4vw;
    padding-top:2vw;
    padding-bottom:3vw;
    width:70%;
    background-color:white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`
export const YouDeserveBody = styled.div`
    position: relative;
    display:flex; 
    padding-left:5vw;
    padding-right:5vw;
    width:100%;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;

    p{
        text-align:center;
    }
`
export const ButtonWithBorder = styled.button`
    padding:1.5vw;
    cursor: pointer;
    border-radius:5px;
    margin-top:1vw;
    margin-bottom:1vw;
    background-color:#f9f9f9;
    color:#9395b0;
    border:1px solid #a4a4ad;
`
export const Check = styled(GoCheck)`
    position:absolute;
    height:300%;
    top:-90%;
    width:auto;
    left:0;
    color: #f2f2f2;
`

export const DivElementsMiddle = styled.div`
    display:flex;
    position:relative;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom:10%;
`

export const ContainerWhats = styled(DivElementsMiddle)`
    margin-bottom:0;
    width:50%;
    text-align:center;
    p {
        margin-bottom:5%;
    }
    span {
        color:#516178;
        font-size: 1.6vw !important;
        @media (min-width: 768px) {
            font-size: 1.2vw !important;
        }
    }
`

export const AutorName = styled.p`
    color:#516178;
    margin-bottom:0 !important;
`



