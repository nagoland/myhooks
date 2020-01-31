import React,{useContext} from "react"
import FormsContext from "../../contexts/FormsContext"
import firestore from "../../config/fireStore"


const AddNameForm = () => {
    const {names, setNames,inputNames, setInputNames} = useContext(FormsContext)
    const checkInput = (e) => {
        e.preventDefault()
        setInputNames(e.target.value)
    }
    const addName = (e) => {
        e.preventDefault()
        if(inputNames === ""){
            return (
                setNames(names)
            )
        }else{
            setNames(names.concat(inputNames))
            setInputNames("")
        }
    }

    return (
        <form className="add-user">
            <input type="text"　onChange={checkInput} value={inputNames}></input>
            <button onClick={addName}>追加</button>
        </form>
    )
}

export default AddNameForm