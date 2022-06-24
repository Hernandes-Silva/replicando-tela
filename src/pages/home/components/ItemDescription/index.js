import { ItemContainer, ItemDescript, ItemTitle, RoundDiv } from "./styles"

const ItemDesscription = (props) => {
    return (
        <ItemContainer>
            <RoundDiv dark={props.dark}>
                <p>
                    {props.number}
                </p>
            </RoundDiv>
            <ItemTitle dark={props.dark}>
                {props.title}
            </ItemTitle>
            <ItemDescript dark={props.dark} >
                Lorem ipsum dolor sit amet,
                consectetur edipscing elit,
                sed do eiusmod tempor incididunt ut labore
            </ItemDescript>
        </ItemContainer>
    )
}

export default ItemDesscription;