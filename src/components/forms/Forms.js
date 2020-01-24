import React from "react"
import AddNameForm from "./AddNameForm"
import MessageForm from "./MessageForm"
import SelectSender from "./SelectSender"
import styled from "styled-components"




const Forms = () => {
    return (
        <>  
            <MessageForm />
            <Flex>
                <SelectSender />
            </Flex>
            <AddNameForm />
        </>
    )
}
const Flex = styled.div`
    display: flex;

`

export default Forms