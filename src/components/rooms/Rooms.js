import React,{useState} from "react"
import styled from "styled-components"
import Room from "./Room"


const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [roomsInput, setRoomsInput] = useState("")


    const handleChange = (e) => {
        e.preventDefault()
        setRoomsInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(roomsInput.match(/^[a-zA-Z]+$/)){
            setRooms(rooms.concat(roomsInput))
            setRoomsInput("")
        }
    }
    return(
        <Wrap>
            <form>
                <input onChange={handleChange}　value={roomsInput}></input>
                <button onClick={handleSubmit}></button>
            </form>
            <ul>
                {rooms.map((room,index)=>(
                    <Room room={room} key={index} />
                ))}
            </ul>
        </ Wrap>
    )
}
const Wrap = styled.div`
    width: 20vw;
    height: 50vh;
    background-color: blue;
`
export default Rooms