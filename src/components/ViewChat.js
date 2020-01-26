import React,{useContext} from "react"
import FormsContext from "../contexts/FormsContext"
import styled from "styled-components"

const ViewChat = () => {
    const {state,dispatch} = useContext(FormsContext)
    // const deleteMessage = (e, index) => {
    //     e.preventDefault()
    //     const deleteComment = "メッセージを削除しました"
    //     dispatch({
    //         type: "DELETE_MESSAGE",
    //         message: deleteComment,
    //         id: index
            
    //     })
    // }
    return(
        <Wrap>
        {
            state.map((event, index) => {
                const deleteMessage = (e) => {
                    e.preventDefault()
                    const time = new Date()
                    const thisTime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
                    const deleteComment = "メッセージを削除しました"
                    dispatch({
                        type: "DELETE_MESSAGE",
                        message: deleteComment,
                        id: event.id,
                        time: thisTime
                        
                    })
                const id = document.getElementById(event.id)
                id.style.display = "none"
                    
                }
                return(
                <div key={index}>
                    <span>{event.sender} : </span>{event.message}<TimeStyled>{event.time}</TimeStyled>
                    <button onClick={deleteMessage} id={event.id}>削除</button>
                </div>
                )
            })
        }
        </ Wrap>
    )
}
const Wrap = styled.div`
    width: 80vw;
`
const TimeStyled = styled.span`
    margin-left: 50px;
    margin-right: 15px;
`

export default ViewChat