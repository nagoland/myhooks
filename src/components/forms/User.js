import React, {useContext} from 'react' 
import FormsContext from "../../contexts/FormsContext"

const User = ({name}) => {
    const {setSender} = useContext(FormsContext)
    const selectSender = (e) => {
        e.preventDefault()
        setSender(name)
    }
    


    return (
        <> 
            <input type="radio" name="checkedName" id={name} onFocus={selectSender} />
            <label htmlFor={name}>{name}</label><br/>
        </>
    )
}

export default User