import React,{useState,useReducer, useEffect} from "react"
import reducer from "../reducers"
import FormsContext from "../contexts/FormsContext"
import {SEND_MESSAGE} from "../actions"
import Forms from "./forms/Forms"
import ViewChat from "./ViewChat"
import styled from "styled-components"
import Rooms from "./rooms/Rooms"
import FireChat from "./FireChat"
import firestore from "../config/fireStore"
import Login from "../Auth/Login"
import Logout from "../Auth/Logout"
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Signup from "../Auth/Signup"
import * as firebase from "firebase"


const App = () => {
    const [state, dispatch] = useReducer(reducer,[])
    const [rooms, setRooms] = useState()
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')
    const [names, setNames] = useState(["nagoya","wataru"])
    const [sender,setSender] = useState("")
    const [inputNames, setInputNames] = useState("")

    const [userName, setUserName] = useState("")

    useEffect(() => {
        listenForMessages()
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                console.log(user)
                setUserName(user.displayName)
                setSender(user.displayName)
            }else{
                setUserName("aaaaaa")
            }
        })
    },[]);
    
    const listenForMessages = () => {
        firestore.collection("messages").orderBy('date')
        .onSnapshot((snapshot) => {
            console.log(snapshot)
            const allMessages = []
            snapshot.forEach((doc) => allMessages.push(doc.data()))
            setMessages(allMessages)
        },(error) => console.log(error))
    }
    return (
        <FormsContext.Provider value={{state,dispatch,message,setMessage,names,
            setNames,sender,setSender,inputNames,setInputNames,messages,setMessages}}>
            <Router>
                <Switch>
                <Route exact path ="/main">
                    <Flex>
                        <FireChat />
                        <ViewChat />
                        <Rooms />
                    </Flex>
                    <Forms />
                    <Logout />
                </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>

                    <Route path="/">
                        <Login />
                    </Route>
                </Switch>

            </Router>
        </FormsContext.Provider>
        
    )
}

const Flex = styled.div`
    display:flex;
`
export default App

