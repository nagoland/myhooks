import React,{useState} from "react"
import User from "./User"

const App = () => {
    const [names, setNames] = useState(["nagoya","wataru"])
    const [input, setInput] = useState("")
    const changeInput = (e) => {

        setInput(e.target.value)
    }
    const addName = (e) => {
        e.preventDefault()
        setNames(names.push(input))
        setInput("")
        console.log(names)
        
    }
    return (
        <>
        <form>
            <input type="text"　onChange={changeInput} value={input}></input>
            <button onClick={addName}>追加</button>
        </form>
        {
            names.map((name)=>(
                <User name={name} />
            ))
        } 
        </>
    )
}

export default App