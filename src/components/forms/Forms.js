import React,{useState, useReducer} from "react"
import FormsContext from "../../contexts/FormsContext"
import AddNameForm from "./AddNameForm"
import MessageForm from "./MessageForm"
import SelectSender from "./SelectSender"
import reducer from "../../reducers"




const Forms = () => {
    const [state, dispatch] = useReducer(reducer, [])
    const [message, setMessage] = useState("")
    const [names, setNames] = useState(["nagoya","wataru"])
    const [sender,setSender] = useState("")
    const [inputNames, setInputNames] = useState("")
    // const [state, setState] = useState({message:"",names:["nagoya","wataru"],sender:"",inputNames:""})

    console.log(state)
    return (
        <>
                <AddNameForm />
                <MessageForm />
                <SelectSender />
        </>
    )
}

export default Forms