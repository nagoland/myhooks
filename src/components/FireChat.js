import React,{ useContext } from "react"
import FormsContext from "../contexts/FormsContext"
import styled from "styled-components"
const FireChat = () => {
    const { messages } = useContext(FormsContext)
    return(
        <Wrapper>
            {messages.map((message)=>(
            <MapWrapper>
            <User>{message.user}: </User>
            <p>{message.content} {message.date.toDate().toString()}</p>
            </MapWrapper>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
`
const MapWrapper = styled.div`
    display:flex;
`
const User = styled.p`
    margin-right: 20px;    
    `

export default FireChat