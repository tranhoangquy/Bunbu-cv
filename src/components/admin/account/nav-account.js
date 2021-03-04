import React from 'react'
import { BrowserRouter as router, Link, Swich, Route } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import Nav from '../nav'
export default function Navaccount(props) {
  return (
    <>
      <Nav />
      <Navbar style={{ margin: '6% 0px 0px' }}>
        <ul className="navbar-nav headers " style={{ fontSize: '15px' }}>
          <li className="nav-item">
            <Link to={'/liststaff'} className="nav-link">
              Staff/HR
            </Link>
          </li>

          <li className="nav-item">
            <Link to={'/addaccount'} className="nav-link">
              AddAccount
            </Link>
          </li>
        </ul>
      </Navbar>
    </>
  )
}
