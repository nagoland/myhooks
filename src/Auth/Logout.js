import React from "react"
import {Link} from "react-router-dom"
import * as firebase from "firebase"

const Logout = () => {
    const logout = () => {
        firebase.auth().onAuthStateChanged( (user) => {
            firebase.auth().signOut().then(()=>{
            console.log("ログアウトしました");
            })
            .catch( (error)=>{
            console.log(`ログアウト時にエラーが発生しました (${error})`);
            });
        });
    }
    return (
        <form onSubmit={logout}>
            <button type="submit"><Link to ="/">ログアウト</Link></button>
        </form>
    )
}

export default Logout