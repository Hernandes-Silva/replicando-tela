import styled from "styled-components";
import { textLightColor } from "../../pages/home/variables";
import { BsThreeDotsVertical } from "react-icons/bs";

const shadow = "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;"

export const CardContainer = styled.div`
    width:90%;
    position:relative;
    height:auto;
`
export const CardDiv = styled.div`
    border-radius:1vw;
    height:100%;
    background-color:white;
    width:100%;
    position:relative;
    z-index:1000;
    box-shadow: ${shadow};
`
export const CardHeader = styled.div`
    border-top-left-radius:1vw;
    border-top-right-radius:1vw;
    padding:2.5vw;
    padding-left:1vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background-color:#a7a4f0;
`
export const CardTitle = styled.p`
    position:relative;
    color:${textLightColor};
    margin-left:8%;
    width:80%;
    font-weight:bold;
`

export const CardSubTitle = styled.p`
    color:silver;
    margin-left:8%;
    margin-top:2%;
    font-size: 1.4vw !important;
    @media (min-width: 768px) {
        font-size: 1.1vw !important;
    }

`

export const IconDot = styled(BsThreeDotsVertical)`
   color:silver;
   position:absolute;
   right:5%;
`
export const CardBody = styled.div`
    padding-left:10%;
    padding-right:10%;
    padding-bottom:10%;
    color:#35557B;
    font-weight:bold;

    span {
        color:silver;
        font-size: 1.1vw !important;
        @media (min-width: 768px) {
            font-size: 0.9vw !important;
        }
    }
`

export const PersonInfo = styled.div`
    margin-top:20%;
    display:flex;
    align-items:center;
    div{
        margin-left:5%;
        p{  
            color:#516178;
            font-size: 1.3vw !important;
            @media (min-width: 768px) {
                font-size: 1.1vw !important;
            }
            font-weight:bold;
        }
    }
`

export const ShadowImg = styled.div`

`
export const AvatarProfile = styled.img`
    display: inline-block;
    width: 15%;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
    
    box-shadow: 0px 1vw 2vw 0px rgba(0,0,0,0.25);
 
`
export const Tasks = styled.div`
    margin-top:10%;
    margin-bottom:5%;
    p {
        margin-top:2%;
    }
`
export const SombraOne = styled.div`
    position:absolute;
    border-radius:1vw;
    top:4%;
    height:92%;
    background-color:rgba(255, 255, 255, 0.8);
    width:100%;
    left:7%;
    box-shadow: ${shadow};
`
export const SombraTwo = styled.div`
    position:absolute;
    border-radius:1vw;
    top:8%;
    height:84%;
    background-color:rgba(255, 255, 255, 0.8);
    width:100%;
    left:13%;
    box-shadow: ${shadow};
`

