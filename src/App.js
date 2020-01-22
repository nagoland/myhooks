import React,{useState} from "react"
import User from "./User"

const App = () => {
    const [text, setText] = useState("入力してね")
    const [names, setNames] = useState(["nagoya","wataru"])
    const [input, setInput] = useState("")
    const changeInput = (e) => {

        setInput(e.target.value)
    }
    const addName = (e) => {
        e.preventDefault()
        if(input === ""){
            return(
                setText("カラですよー")
            )
        }else{
            setText(input + "さんが仲間になりました")
            setNames(names.concat(input))
            setInput("")
        }
    }
    return (
        <>
        <form>
            <input type="text"　onChange={changeInput} value={input}></input>
            <button onClick={addName}>追加</button>
        </form>
        <h1>{text}</h1>
        {
            names.map((name,index)=>(
                <User name={name} key={index}/>
            ))
        } 
        </>
    )
}

export default App