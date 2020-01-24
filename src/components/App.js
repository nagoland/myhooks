import React,{useState,useReducer} from "react"
import reducer from "../reducers"
import FormsContext from "../contexts/FormsContext"
import {SEND_MESSAGE} from "../actions"
import Forms from "./forms/Forms"
import ViewChat from "./ViewChat"


const App = () => {
    const [state, dispatch] = useReducer(reducer, [])
    const [message, setMessage] = useState("")
    const [names, setNames] = useState(["nagoya","wataru"])
    const [sender,setSender] = useState("")
    const [inputNames, setInputNames] = useState("")
    return (
        <FormsContext.Provider value={{state,dispatch,message,setMessage,names,
            setNames,sender,setSender,inputNames,setInputNames}}>

            <ViewChat />
            <Forms />
        </FormsContext.Provider>
        
    )
}

export default App

