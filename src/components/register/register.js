import React, { useState } from 'react'
import logo from '../../assets/logo.png'
function SignUp(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setComfirmpassword] = useState('')
  const [role, setRole] = useState('User')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <img src={logo} style={{ width: '151px', marginLeft: '42%' }} />
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: '500px', margin: 'auto' }}
      >
        <h3>Sign up</h3>
        <div className="form-group">
          <label>User name</label>
          <input
            type="username"
            placeholder="Enter username"
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
            required="true"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            required="true"
          />
        </div>
        <div className="form-group">
          <label>Role</label>
          <select onChange={(e) => setRole(e.target.value)}>
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
            onChange={(e) => setPassword(e.target.value)}
            required="true"
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Enter ConfirmPassword"
            className="form-control"
            onChange={(e) => setComfirmpassword(e.target.value)}
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
