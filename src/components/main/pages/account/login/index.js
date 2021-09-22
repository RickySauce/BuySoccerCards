import React, { useState } from 'react' 
import './login.css'
import {
    Link
  } from "react-router-dom";

const Login = () => {
    return (
        <div className="container centered login">
            <h1 className="section-title">login</h1>
            <div> oAuth Goes Here</div>
            <form>
                <label>Email</label>
                <input type="email" name="email" id="email" autoCorrect="off" autoCapitalize="off"/>
                <label>Password</label>
                <input type="password" value="" name="password" id="password"/>
                <div>
                    <input type="submit" value="Sign In"/>
                    <Link className="link" to="/account/register">Create Account</Link>
                </div>
            </form>
        </div>
    )
}

export default Login