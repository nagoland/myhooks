import React,{useState,useReducer} from "react"
import reducer from "../reducers"
import FormsContext from "../contexts/FormsContext"
import {SEND_MESSAGE} from "../actions"
import Forms from "./forms/Forms"
import ViewChat from "./ViewChat"
import styled from "styled-components"
import Rooms from "./Rooms"


const App = () => {
    // const initialState = {
    //     roomName: "",
    //     events: []
    // }
    const [state, dispatch] = useReducer(reducer,[])
    const [rooms, setRooms] = useState()
    const [message, setMessage] = useState("")
    const [names, setNames] = useState(["nagoya","wataru"])
    const [sender,setSender] = useState("")
    const [inputNames, setInputNames] = useState("")
    return (
        <FormsContext.Provider value={{state,dispatch,message,setMessage,names,
            setNames,sender,setSender,inputNames,setInputNames}}>
            <Flex>
            <ViewChat />
            <Rooms />
            </Flex>
            <Forms />
        </FormsContext.Provider>
        
    )
}

const Flex = styled.div`
    display:flex;
`
export default App

