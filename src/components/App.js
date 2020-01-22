import React,{useState,useReducer} from "react"
import User from "./User"
import reducer from "../reducers"

const App = () => {
    const [state, dispatch] = useReducer(reducer, [])
    const [message, setMessage] = useState("")
    
    const [names, setNames] = useState(["nagoya","wataru"])
    const [sender,setSender] = useState(names[0])
    const [inputNames, setInputNames] = useState("")

    const addName = (e) => {
        e.preventDefault()
        setNames(names.concat(inputNames))
        setInputNames("")
    }
    const checkInput = (e) => {
        e.preventDefault()
        setInputNames(e.target.value)
    }


    const changeSender= (e) => {
        e.preventDefault()
        const activeIndex = Math.floor(Math.random()*(names.length))
        setSender(names[activeIndex])
    }
    const checkMessage = (e) => {
        e.preventDefault()
        setMessage(e.target.value)
    }
    const sendMessage = (e) => {
        e.preventDefault()
        dispatch(
            {
                type: "SEND_MESSAGE",
                message,
                sender
            }
        )
        setMessage("")
    }
    console.log({state})
    return (
        <>
        <form className="add-user">
            <input type="text"　onChange={checkInput} value={inputNames}></input>
            <button onClick={addName}>追加</button>
        </form>
        
        <form className="send-message">
            <span>{sender} : </span>
            <button onClick={changeSender}>チェンジ！</button>
            <input onChange={checkMessage}></input>
            <button onClick={sendMessage}>送信</button>
        </form>
        {
            names.map((name,index)=>(
                <User name={name} key={index}/>
            ))
        }
        </>
    )
}

export default App

