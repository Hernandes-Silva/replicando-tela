import { TextFooter } from "../../styles/styles"
import { ListContainer, Title } from "./styles"

const List = (props) =>{
    return (
        <ListContainer>
            <Title>
                {props.title}
            </Title>
           {props.data?.map((item) =>{
               return (<TextFooter>{item}</TextFooter>)
           })}

        </ListContainer>
    )
}

export default List;