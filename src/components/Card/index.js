import { AvatarProfile, CardBody, CardContainer, CardDiv, CardHeader, CardSubTitle, CardTitle, IconDot, PersonInfo, ShadowImg, SombraOne, SombraTwo, Span, Tasks, Text } from "./styles"

import avatar from "./../../assets/avatar.jpg"
import CardTask from "./components/CardTask";
const Card = () => {
    return (
        <CardContainer>
            <CardDiv>
                <CardHeader>
                    <CardTitle>
                        Main reason of your scores
                    </CardTitle>
                    <CardSubTitle>
                        Lorem ipsum dummy text
                    </CardSubTitle>
                    <IconDot size="10%" />
                </CardHeader>

                <CardBody>
                    <PersonInfo>
                       
                            <AvatarProfile src={avatar} />
                      
                        <div>
                            <p>Lora jenifar</p>
                            <span>Lorem ipsum dummy text</span>
                        </div>
                    </PersonInfo>

                    <Tasks>
                        <span>Task</span>
                        <p>Agency lading page for creative agency</p>

                        
                    </Tasks>

                    <CardTask 
                        title={"Prototype with invision"}
                        status="Completed"
                        date="22 january"
                        />
                    <CardTask 
                        title={"Visualization with sketch"}
                        status="Running"
                        date="22 january"
                    />
                </CardBody>
                
            </CardDiv>
            
            <SombraTwo />
            <SombraOne />
            
        </CardContainer>
    )
}

export default Card;