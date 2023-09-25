import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import noteContext from "../context/NoteContext"
import './login.css';

function Login() {
    const context = useContext(noteContext);
    const { checkUser } = context;
    const [User, setUser] = useState({ email: "", password: "" });



    const handlesubmit = (e) => {

        e.preventDefault();
        console.log(User.email + User.password);
        checkUser(User.email, User.password);
        // navigate("/home");
    }

    const updatevalues = (e) => {
        setUser({ ...User, [e.target.name]: e.target.value });
    }



    return (
        <div className='login-page'>
            <div className="wrapper">
            

                <div class="form">
                <div class="avatar">
                    <img src="https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_960_720.png" alt="Avatar" />
                </div>
                <form>
                    <h1>Login </h1>


                    <div className="input-box">
                        <input type="email" placeholder="email" name="email" onChange={updatevalues} required />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" name="password" onChange={updatevalues} required />
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />Remember me
                        </label>
                        <p class="message"> <a href="/">Forgot password?</a></p>
                    </div>
                    <button type="submit" className="btn" onClick={handlesubmit}>Login</button>

                    <div className="register-link">
                        <p class="message">Don't have an account?<Link to="/signup"> Register</Link></p>
                    </div>
                </form>


                </div>

            </div>
        </div>
    )
}

export default Login
