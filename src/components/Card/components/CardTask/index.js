import { CardTaskContainer, Fotter, Text } from "./styles"

const CardTask = (props) =>{
    return (
        <CardTaskContainer>
           <p>{props.title}</p>
           <Fotter>
              <span>{props.status}</span> 
              <span>{props.date}</span> 
           </Fotter>
        </CardTaskContainer>

    )
}
export default CardTask;