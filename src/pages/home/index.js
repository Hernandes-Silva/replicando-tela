import Card from "../../components/Card";
import FormCompany from "../../components/FormCompany";
import NavBar from "../../components/NavBar";
import { AutomateImage, AutomateImageContainer, AutorName, AvatarLarge, BottomHowBuild, ButtonWithBorder, ButtonWithoutBorder, Check, ClickIcon, ContainerAutomate, ContainerHowBuild, ContainerRated, ContainerWelcome, ContainerWhats, ContainerYouDeserve, Diagonal, DivClick, DivElementsMiddle, DivGlobal, DivRated, DivTitleAndCard, DivYouDeserve, GlobeICon, LeftWelcome, Padding, RightWecolme, RoundIcon, TextLight, TextSilver, Title, WelcomeTitle, YouDeserveBody } from "./styles";
import { BsArrowDown } from "react-icons/bs";
import ItemDesscription from "./components/ItemDescription";
import imgAutomate1 from "./../../assets/autome1.png"
import imgAutomate2 from "./../../assets/autome2.png"
import globe from "./../../assets/globeicon.png"
import click from "./../../assets/click.png"
import Avatars from "./components/Avatars";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <DivGlobal>
            <ContainerWelcome>
                <Diagonal ></Diagonal>
                <Padding>
                    <NavBar />
                    <DivTitleAndCard>
                        <LeftWelcome>
                            <TextLight>
                                Welcome to Ask nicely
                            </TextLight>

                            <WelcomeTitle>
                                We love  to <br />
                                hear your feedback
                            </WelcomeTitle>
                            <TextLight>
                                NPS® software to hel your businnes deliver great customer aexperiences
                            </TextLight>

                            <FormCompany />

                        </LeftWelcome>

                        <RightWecolme>
                            <Card />
                        </RightWecolme>
                    </DivTitleAndCard>

                    <RoundIcon >
                        <BsArrowDown size="30%" />
                    </RoundIcon>

                </Padding>
            </ContainerWelcome>

            <ContainerHowBuild>
                <div>
                    <ButtonWithoutBorder>How it works</ButtonWithoutBorder>
                </div>

                <div>
                    <Title> How Build your Culture on continous customers feedback</Title>
                </div>
            </ContainerHowBuild>

            <Padding>
                <BottomHowBuild>
                    <ItemDesscription
                        title="Search company"
                        number="01"
                    />
                    <ItemDesscription
                        title="Count your rating"
                        number="02"
                    />
                    <ItemDesscription
                        title="Tell them your experience"
                        number="03"
                    />
                </BottomHowBuild>
            </Padding>

            <ContainerAutomate>
                <AutomateImageContainer>
                    <AutomateImage src={imgAutomate1} />
                </AutomateImageContainer>
                <div>
                    <GlobeICon src={globe} />
                    <Title>Automate Customer reviews, referrals </Title>
                    <TextSilver>
                        Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book.
                    </TextSilver>
                    <ButtonWithoutBorder>
                        Learn more
                    </ButtonWithoutBorder>
                </div>

            </ContainerAutomate>

            <ContainerAutomate>
                <div>
                    <GlobeICon src={globe} />
                    <Title>Automate Customer reviews, referrals </Title>
                    <TextSilver>
                        Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book.
                    </TextSilver>
                    <ButtonWithoutBorder>
                        Get started
                    </ButtonWithoutBorder>
                </div>
                <AutomateImageContainer>
                    <AutomateImage src={imgAutomate2} />
                </AutomateImageContainer>

            </ContainerAutomate>

            <ContainerRated>
                <DivRated>
                    <DivClick>
                        <ClickIcon src={click} />
                        <WelcomeTitle>
                            Rated No.1 Enterprise Feedback
                            Management platform
                        </WelcomeTitle>
                    </DivClick>

                    <Padding>
                        <BottomHowBuild>
                            <ItemDesscription
                                dark
                                title="Search company"
                                number="01"
                            />
                            <ItemDesscription
                                dark
                                title="Count your rating"
                                number="02"
                            />
                            <ItemDesscription
                                dark
                                title="Tell them your experience"
                                number="03"
                            />
                        </BottomHowBuild>
                    </Padding>
                </DivRated>

            </ContainerRated>

            <DivElementsMiddle>
                <DivYouDeserve>
                    <Check />
                    <YouDeserveBody>
                        <Title>
                            You deserve best customer feedback
                        </Title>


                        <ButtonWithBorder>
                            Get Started

                        </ButtonWithBorder>
                    </YouDeserveBody>
                </DivYouDeserve>

            </DivElementsMiddle>

            <DivElementsMiddle>
                <ContainerWhats>
                    <ButtonWithBorder>
                        Testimonial
                    </ButtonWithBorder>

                    <Title>
                        Whats client say about us 

                    </Title>

                    <TextSilver>
                        Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type sp
                    </TextSilver>

                    <AutorName>John Doe</AutorName>
                    <span>studante of graphic design</span>
                </ContainerWhats>
                <Avatars />
            </DivElementsMiddle>

            <Footer />

        </DivGlobal>
    )
}
export default Home;