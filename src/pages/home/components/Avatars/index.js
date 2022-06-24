import { AvatarLargeLeft, AvatarLargeRight, AvatarMiddleLeft, AvatarMiddleRight,  AvatarSmallLeft,  AvatarSmallRight } from "./styles";
import avatar from "./../../../../assets/avatar.jpg"
import avatar2 from "./../../../../assets/avatar2.jpg"
const Avatars = () =>{
    return(
        (
            <>
                <AvatarLargeLeft src={avatar}/>
                <AvatarSmallLeft src={avatar}/>
                <AvatarMiddleLeft src={avatar2}/>

                <AvatarLargeRight src={avatar2}/>
                <AvatarSmallRight src={avatar}/>
                <AvatarMiddleRight src={avatar}/>
            </>
        )
    )
}
export default Avatars;