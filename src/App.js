import React,{useEffect,useState} from "react"
import User from "./User"

const App = (props) => {
    // const [text, setText] = useState("入力してね")
    // const [names, setNames] = useState(props.names)
    // const [input, setInput] = useState(props.input)
    const [state, setState] = useState(props)
    const [activeUser, setActiveUser] = useState([state.names[0]])



    const changeInput = (e) => {
        setState({...state,input:e.target.value})
    }
    const addName = (e) => {
        e.preventDefault()
        if(state.input === ""){
            // return(
            //     setText("カラですよー")
            // )
        }else{
            setState({...state,
                names: state.names.concat(state.input),
                input: ""})
            console.log(state.names)
        }
    }
    // useEffect(()=>{
    //     setState({...state,input:""})
    // })

    const changeActiveUser= (e) => {
        e.preventDefault()
        const activeIndex = Math.floor(Math.random()*(state.names.length))
        setActiveUser(state.names[activeIndex])
    }
    return (
        <>
        <form>
            <input type="text"　onChange={changeInput} value={state.input}></input>
            <button onClick={addName}>追加</button>
            <button onClick={changeActiveUser}>チェンジ！</button>
        </form>
        {/* <h1>{text}</h1> */}
        {
            state.names.map((name,index)=>(
                <User name={name} key={index}/>
            ))
        }
        <h1>{activeUser}</h1>
        </>
    )
}
// 
App.defaultProps =  {
    names: ["nagoya","wataru"],
    input: ""
}


export default App

