import styled from "styled-components"
import { textLightColor } from "../../pages/home/variables"


export const FormCompanyContainer = styled.div`
    margin-top:4vw;
    margin-bottom:5vw;
    display:flex;
    flex-direction:row;
`
export const InputCompany = styled.input`
    width:60%;
    border-radius:0.5vw;
    color:${textLightColor};
    border: 0.1vh solid rgba(255, 255, 255, 0.3);
    background-color:transparent;
    padding:1vw;
    :focus {
        border: 0.1vh solid rgba(255, 255, 255, 0.6);
        box-shadow:none;
        outline: none;
    }
    ::placeholder{
        color:${textLightColor};
    }
`

export const TakeATour = styled.div`
    max-width:30%;
    margin-left:1vw;
    display:flex;
    flex-direction:row;
    align-items:center;
    flex:1;
    color:${textLightColor};
    background-color:#4d60e2;
    border-radius:0.5vw;
    font-size: 1.8vw !important;
    
    @media (min-width: 768px) {
            font-size: 1.1vw !important;
    }
    p{
        
        text-align:center;
        
        flex:6;
       
    }
    div{
        justify-content:center;
        background-color:#4659d3;
        vertical-align:middle;
        height:100%;
        flex:2;
        display:flex;
        align-items:center;
        border-radius:0.5vw;
    }
`
