import React,{useContext} from "react"
import FormsContext from "../contexts/FormsContext"
import styled from "styled-components"
import firestore from "../config/fireStore"




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