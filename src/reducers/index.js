// action = {
//     type: "SEND_MESSAGE"
//     senderName: 
//     message: "こんにちは"
// }

const events = (state=[], action) => {

    switch(action.type){
        case "SELECT_SENDER":
            const sender = {sender: action.sender}

            return [...state,sender]


        case "SEND_MESSAGE":
            const event = {sender: action.sender,
                            message: action.message}
            const length = state.length

            const id = length === 0 ? 1 : state[length-1].id + 1
            console.log(state)
            // if(length === 0){
            //     id = 1
            // } else {
            //     id = state[length-1].id + 1
            // }
            return [...state, {id:id, ...event}]
        case "DELETE_MESSAGE":
            return state
        case "DELETE_ALL_MESSAGE":
            return []
        default:
            return state
    }

}

export default events