import { ContainerIcons, FooterContainer, ListAsk, ListAskTitle, TextCopyRights, TwitterICon, WifiIcon } from "./styles";
import { BsPersonPlus, BsGlobe } from "react-icons/bs";
import { TextFooter } from "../../styles/styles.js";
import List from "../List";
const SIZE_ICONS = "1vw"

const products1 = ["Blog", "Group bookings", "Bookin", "Hosel awards", "Airport transger", "Car rental"]
const products2 = ["Hostel world", "Press", "CCarrers", "Sign Up", "Affiliate program", "Carrers"]
const company = ["Hostel world", "Press", "CCarrers", "Sign Up", "Affiliate program"]
const Footer = () => {
    return (
        <div>
            <FooterContainer>
                <ListAsk>
                    <ListAskTitle>
                        Ask nicely
                    </ListAskTitle>

                    <TextFooter>
                        Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type sp
                    </TextFooter>

                    <ContainerIcons>
                        <TwitterICon size={SIZE_ICONS} />
                        <BsPersonPlus size={SIZE_ICONS} />
                        <BsGlobe size={SIZE_ICONS} />
                        <WifiIcon size={SIZE_ICONS} />
                    </ContainerIcons>
                </ListAsk>
                <List title="Products" data={products1} />
                <List title="Products" data={products2} />
                <List title="Company" data={company} />
            </FooterContainer>
            <TextCopyRights>
                copyrights@asknicely.com
            </TextCopyRights>
        </div>
    )
}
export default Footer;