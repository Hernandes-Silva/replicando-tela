import styled from "styled-components"


export const AvatarProfileFacory = styled.img`
display: inline-block;
position:absolute;
border-radius: 50%;
object-fit: cover;
box-shadow: 0px 1vw 2vw 0px rgba(0,0,0,0.25);
`

export const AvatarLargeLeft = styled(AvatarProfileFacory)`
    width: 8vw;
    height: 8vw;
    left:-4%;
    bottom:5%;
`
export const AvatarMiddleLeft = styled(AvatarProfileFacory)`
    width: 4vw;
    height: 4vw;
    left:15%;
    top:44%;
`
export const AvatarSmallLeft = styled(AvatarProfileFacory)`
    width: 3vw;
    height: 3vw;
    left:15%;
    bottom:0;
`

export const AvatarLargeRight = styled(AvatarProfileFacory)`
    width: 6vw;
    height: 6vw;
    right:12%;
    bottom:0;
`
export const AvatarMiddleRight = styled(AvatarProfileFacory)`
    width: 4vw;
    height: 4vw;
    right:15%;
    top:44%;
`
export const AvatarSmallRight = styled(AvatarProfileFacory)`
    width: 3vw;
    height: 3vw;
    right:-1.5% ;
    bottom:30% ;
`