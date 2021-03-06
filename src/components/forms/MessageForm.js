import React,{useState, useContext} from "react"
import FormsContext from "../../contexts/FormsContext"
import styled from "styled-components"
import firestore from "../../config/fireStore"



const MessageForm = () => {
    const { message, setMessage,messages, setMessages, sender, dispatch} = useContext(FormsContext)
    const checkMessage = (e) => {
        e.preventDefault()
        setMessage(e.target.value)
    }
    const sendMessage = (e) => {
        e.preventDefault()
        const time = new Date()
        const thisTime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
        if(message !== "" && sender !==""){
            dispatch(
                {
                    type: "SEND_MESSAGE",
                    message,
                    sender,
                    time: thisTime
            }
            )
            firestore.collection("messages").add({
                user: sender,
                content: message,
                date: time
            })
            setMessage("")

        }
    }
    return(
        <>
        <Wrap>
            <form className="send-message">
                <input onChange={checkMessage} className="message-form" value={message}></input>
                <button onClick={sendMessage} className="btn">送信</button>
            </form>
        </Wrap>
        </>
    )
}

const Wrap = styled.div `
    .message-form{
    width: 500px;
    height: 40px;
    border-radius: 10px;
    }
    .btn{
        height:40px;
        width: 50px;
    }
`

export default MessageForm