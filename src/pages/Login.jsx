import axios from 'axios';
import React, { useState } from 'react'
import { LoginUser } from '../services/authService';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const LoginAuth = async (e) => {
        e.preventDefault();

        try {
            /* const res = await axios.post("http://localhost:3000/users/login", {
                email,
                password
            })
 */

            const res = await LoginUser({email,password})
            console.log(res.data);

           localStorage.setItem("token" , res.token)

        } catch (err) {
            console.log(err.response);

        }
    }


    return (
        <div>
            <form onSubmit={LoginAuth}>
                <input type="email" name="email" id="" placeholder='type your email here' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name="password" id="" placeholder='type your password here' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Login</button>

            </form>
        </div>
    )
}

export default Login