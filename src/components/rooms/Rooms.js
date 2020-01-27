import React, { useState } from "react"
import Room from './Room'
import styled from "styled-components"

// rooms初期値 = サーバーからもらう

const Rooms = () => {

  const [rooms, setRooms] = useState([])
  const [roomsInput, setRoomsInput] = useState('')

  const handleChange = (e) => {
    setRoomsInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setRooms(rooms.concat(roomsInput))
  }
  const rows = () => {
    return (
      rooms.map(
        (room) => <Room room={room} />
      )
    )
  }
  return (
    <Wrap>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input onChange={handleChange}></input>
        <button>追加</button>
      </form>
      <ul>
        {rows()}
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