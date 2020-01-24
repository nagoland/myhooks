import React,{useContext} from "react"
import FormsContext from "../contexts/FormsContext"

const ViewChat = () => {
    const {state} = useContext(FormsContext)
    return(
        <>
        {
            state.map(event => (
                <p>
                    <span>{event.sender} : </span>{event.message}
                </p>
            ))
        }
        </>
    )
}

export default ViewChat