import React,{useState, useContext} from 'react'
import {Link} from "react-router-dom"
import * as firebase from "firebase"
import FormsContext from "../contexts/FormsContext"
const Login = () => {
    const {names,setNames} = useContext(FormsContext)

    const [userName, setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const getEmail = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
        // setEmail("mike@gmail.com")
    }
    const getPassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
        // setPassword("sa1224nw")
    }
    const signin = (e) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result)=>{
            console.log(result.user.displayName)
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            return console.log(errorCode)
        },[]);

    }
    return (
        <>
            <form onSubmit={signin}>
                <label>メアド：</label><input onChange={getEmail}></input>
                <label>パスワード：</label><input onChange={getPassword}></input>
                <button type="submit"><Link to="/main">ログイン</Link></button>
            </form>
            <form>  
            <button type="submit"><Link to="/signup">新規登録</Link></button>
            </form>
        </>
    )
}

export default Login
