import React,{useState, useContext} from "react"
import FormsContext from "../../contexts/FormsContext"

const MessageForm = () => {
    const { message, setMessage, sender, dispatch} = useContext(FormsContext)
    const checkMessage = (e) => {
        e.preventDefault()
        setMessage(e.target.value)
    }
    const sendMessage = (e) => {
        e.preventDefault()
        if(message !== ""){
            dispatch(
                {
                    type: "SEND_MESSAGE",
                    message,
                    sender
                }
            )
        }
        setMessage("")
    }
    return(
        <form className="send-message">
            <span>{sender} : </span>
            <input onChange={checkMessage}></input>
            <button onClick={sendMessage}>送信</button>
        </form>
    )
}

export default MessageForm