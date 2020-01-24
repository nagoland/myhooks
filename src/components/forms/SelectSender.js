import React, { useContext } from "react"
import FormsContext from "../../contexts/FormsContext"
import User from "./User"
import styled from "styled-components"


const SelectSender = () => {
    const {names,sender} = useContext(FormsContext)

    return(
        <Wrap>
        <span>送信者: {sender}</span>
        <Flex>
        {
            names.map((name,index)=>(
                <User name={name} key={index} />
            ))
        }
        </Flex>
        </ Wrap>
    )
}
const Wrap = styled.div`
    display:flex;
    flex-direction: column;
`

const Flex = styled.div`
    display: flex;
`



export default SelectSender