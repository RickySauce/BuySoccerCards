import React, { useState } from 'react' 
import { capitalize } from 'src/functions'
import './login.css'
import {
    Link
  } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleChange = (e) => {
        eval('set' + capitalize(e.target.name))(e.target.value)
    }

    console.log(email, password)

    return (
        <div className="container centered login">
            <h1 className="section-title">login</h1>
            <div> oAuth Goes Here</div>
            <form>
                <label>Email</label>
                <input type="email" value={email} name="email" id="email" onChange={handleChange} autoCorrect="off" autoCapitalize="off"/>
                <label>Password</label>
                <input type="password" value={password} name="password" id="password" onChange={handleChange}/>
                <div>
                    <input type="submit" value="Sign In"/>
                    <Link className="link" to="/account/register">Create Account</Link>
                    <a href="#"> Forgot Your Password?</a>
                </div>
            </form>
        </div>
    )
}

export default Login