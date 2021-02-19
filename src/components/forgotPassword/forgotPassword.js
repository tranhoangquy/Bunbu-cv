import React, { useState } from 'react'
import logo from '../../assets/bunbu.png'
export default function ForgotPassword(props) {
    return (
        <>
            <img src={logo} style={{ width: '151px', marginLeft: '42%' }} />
            <form style={{ maxWidth: '500px', margin: '0 auto' }}>
                <h3>Forgot your password</h3>
                <div className="form-group">
                    <label>You Email address</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="form-control"
                        required="true"
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                    Send me email
                </button>
            </form>
        </>
    )
}
