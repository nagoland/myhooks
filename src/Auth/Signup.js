import React,{ useState } from "react"
import {Link} from "react-router-dom"
import * as firebase from "firebase"
const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")




    
    const getEmail = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const getUserName = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const signup = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(result => {
            result.user.updateProfile({
                displayName: name
            })
        })
        .catch(function(error){
            var errorCode = error.code
            var errorMessage = error.message
        });
    }
    return (
        <>
            <form  onSubmit={signup}>
                <label>名前：</label><input onChange={getUserName}></input>
                メールアドレス：<input onChange={getEmail}></input>
                パスワード：<input onChange={getPassword}></input>
                <button type="submit"><Link to="">登録</Link></button> 
            </form>
        </>
    )
}

export default Signup