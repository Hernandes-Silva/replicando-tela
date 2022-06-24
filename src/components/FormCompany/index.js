import { FormCompanyContainer, InputCompany, TakeATour } from "./styles"
import { FaAngleDoubleRight } from "react-icons/fa";

const FormCompany = () =>{
    return (
        <FormCompanyContainer>
            <InputCompany placeholder="Enter your Company name"/>
            <TakeATour>
                <p>Take a tour</p>
                <div><FaAngleDoubleRight size="23%"/></div>
            </TakeATour>
        </FormCompanyContainer>
    )
}

export default FormCompany; 