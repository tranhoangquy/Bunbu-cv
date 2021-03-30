import Recat, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { SplitButton } from 'react-bootstrap'
import bunbu from 'assets/logo.png'
import './nav.css'
export default function Nav(props) {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <Link to={'admin'} className="navbar-brand">
          <img src={bunbu} />
        </Link>
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link to={'/template'} className="nav-link">
              Template
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'/users'} className="nav-link">
              Account
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'/users'} className="nav-link">
              List CV
            </Link>
          </li>
        </ul>
        <div className="navbar-nav ml-auto">
          <SplitButton
            id="dropdown-split-varirants-Outline-primary"
            title="User"
          >
            <dl>
              <dt>
                <Link to="/admin/profile">profile</Link>
              </dt>
              <dt>
                <Link
                  to="/"
                  // onClick={() =>
                  //     props.changeStatusLogin(false)
                  // }
                >
                  Log out
                </Link>
              </dt>
            </dl>
          </SplitButton>
        </div>
      </nav>
    </>
  )
}
