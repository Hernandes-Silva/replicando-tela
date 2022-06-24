import styled from "styled-components";
import { textSilverColor } from "../../pages/home/variables";
import { FaWifi} from "react-icons/fa";
import { BsTwitter} from "react-icons/bs";

export const FooterContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    flex:1;
    padding-left:15vw;
    padding-right:15vw;
`

export const ListAsk = styled.div`
    display:flex;
    padding-right:3vw;
    flex-direction:column;
    flex:1;
    p {
        font-weight:bold;
    }
`
export const ListAskTitle = styled.p`
    margin-bottom:1vw;
`

export const ContainerIcons = styled.div`
    margin-top:1.5vw;
    display:flex;
    svg{
        margin-left:1vw;
    }
`
export const TwitterICon = styled(BsTwitter)`
    margin-left:0 !important;
`
export const WifiIcon = styled(FaWifi)`
    transform: rotate(45deg);
`
export const TextCopyRights = styled.p`
    color:silver;
    text-align:center;
    margin-top:3vw;
    margin-bottom:5vw;
    font-size: 1.5vw !important;
    @media (min-width: 768px) {
        font-size: 1.1vw !important;
    }
`