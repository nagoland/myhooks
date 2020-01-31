// action = {
//     type: "SEND_MESSAGE"
//     senderName: 
//     message: "こんにちは"
// }



// state = [{id:1, roomsName:"room1", inside:[{sender: "wataru", message: "hello", time: "12:12"}]},
//         {id:2 roomsName: "room2", inside:[{sender: "nagoya", message: "goodnight", time: "13:13"}]}
//         ]









const events = (state=[], action) => {
    switch(action.type){

        case "SEND_MESSAGE":
            const event = {sender: action.sender,
                            message: action.message,
                            time: action.time}
            const length = state.length

            const id = length === 0 ? 1 : state[length-1].id + 1
            console.log(state)
            return [...state, {id:id, ...event}]
        case "DELETE_MESSAGE":
            console.log(action.message)
            console.log(state[action.id-1].message)
            state[action.id-1].message = action.message
            state[action.id-1].time = action.time
            console.log(state[action.id-1].message)

            return [...state]
        case "DELETE_ALL_MESSAGE":
            return []
        default:
            return state
    }

}

export default events