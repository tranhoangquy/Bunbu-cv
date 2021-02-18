import React, { useState } from 'react'
import logo from '../../assets/bunbu.png'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import ForgotPassword from '../forgotPassword/forgotPassword'
import axios from 'axios'
export default function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const getValueemail = (e) => {
        setEmail(e.target.value)
    }
    const getValuepassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <img src={logo} style={{ width: '151px', marginLeft: '42%' }} />
            <form
                onSubmit={handleSubmit}
                style={{ maxWidth: '500px', margin: '0 auto' }}
            >
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="form-control"
                        onChange={getValueemail}
                        required="true"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Enter password"
                        className="form-control"
                        onChange={getValuepassword}
                        required="true"
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                    Login
                </button>
                <div className="mt-5 ">
                    <Link to={'/SignUp'}>Sign Up</Link>
                    <Link style={{ float: 'right' }} to={'/ForgotPassword'}>
                        Forgot Password?
                    </Link>
                </div>
                <div style={{ height: 20 }}></div>
            </form>
        </>
    )
}
