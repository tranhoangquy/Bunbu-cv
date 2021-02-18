import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import axios from 'axios'
function SignUp(props) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setComfirmpassword] = useState('')
    const [role, setRole] = useState('User')
    const getValueemail = (e) => {
        setEmail(e.target.value)
    }
    const getValuepassword = (e) => {
        setPassword(e.target.value)
    }
    const getComfirmpassword = (e) => {
        setComfirmpassword(e.target.value)
    }
    const getUsername = (e) => {
        setUsername(e.target.value)
    }
    const getRole = (e) => {
        setRole(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <img src={logo} style={{ width: '151px', marginLeft: '42%' }} />
            <form onSubmit={handleSubmit}>
                <h3>Sign up</h3>
                <div className="form-group">
                    <label>User name</label>
                    <input
                        type="username"
                        placeholder="Enter username"
                        className="form-control"
                        onChange={getUsername}
                        required="true"
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="form-control"
                        onChange={getValueemail}
                        required="true"
                    />
                </div>
                <div className="form-group">
                    <label>Role</label>
                    <select onChange={getRole}>
                        <option>User</option>
                        <option>Hr</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        className="form-control"
                        onChange={getValuepassword}
                        required="true"
                    />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Enter ConfirmPassword"
                        className="form-control"
                        onChange={getComfirmpassword}
                        required="true"
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                    Sign up
                </button>
            </form>
        </>
    )
}

export default SignUp
