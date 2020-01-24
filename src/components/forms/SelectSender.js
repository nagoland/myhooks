import React, { useContext } from "react"
import FormsContext from "../../contexts/FormsContext"
import User from "./User"


const SelectSender = () => {
    const {names} = useContext(FormsContext)

    return(
        <>
        {
            names.map((name,index)=>(
                <User name={name} key={index} />
            ))
        }
        </>
    )
}

export default SelectSender