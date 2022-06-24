import { DivOption, Logo, NavBarContainer, OptionsNav, TextOptions, TextOptionsNo } from "./styles"

const NavBar = () => {
    return (
        <NavBarContainer>
            <Logo>
                <p>Ask nicely</p>
            </Logo>
            <OptionsNav>
                <TextOptions>
                    Features
                </TextOptions>
                <TextOptions>
                    Integrations
                </TextOptions>
                <TextOptions>
                    Pricing
                </TextOptions>
                <TextOptions>
                    Blog
                </TextOptions>
                <TextOptions>
                    Login
                </TextOptions>
                <TextOptions>
                    Get started
                </TextOptions>
            </OptionsNav>
        </NavBarContainer>
    )
}

export default NavBar;