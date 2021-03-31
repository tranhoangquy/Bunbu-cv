import Recat, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { SplitButton } from 'react-bootstrap'
import bunbu from 'assets/logo.png'
import '../../staff/homeStaff/homeStaff.css'
export default function Nav(props) {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <Link to={'/staff'} className="navbar-brand">
          <img src={bunbu} style={{ height: '55px' }} />
        </Link>
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link to={'/templates'} className="nav-link">
              Template
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'/staff/listcv'} className="nav-link">
              List CV
            </Link>
          </li>
        </ul>
        <div className="navbar-nav ml-auto">
          <SplitButton
            id="dropdown-split-varirants-Outline-primary"
            title="User"
          >
            <dl style={{ textAlign: 'center' }}>
              <dt style={{ marginBottom: 10 }}>
                <Link to="/staff/profile">profile</Link>
              </dt>
              <dt>
                <Link
                  to="/"
                  // onClick={() =>
                  //     props.changeStatusLogin(false)
                  // }
                >
                  log out
                </Link>
              </dt>
            </dl>
          </SplitButton>
        </div>
      </nav>
    </>
  )
}