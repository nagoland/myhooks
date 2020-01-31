import React from "react"
import Signup from "./Signup"
import Login from "./Login"
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
const Auth = () => {

return(
    <>
    <Router>

        <Route path="/signup">
            <Signup />
        </Route>

    </Router>
    </>
)
}

export default Auth