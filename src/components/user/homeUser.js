import React from 'react'
import Nav from './nav'
import Container from 'react-bootstrap'
import './homeUser.css'
import Background from '../../assets/bunbu.png'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function HomeUser(props) {
  return (
    <>
      <Nav />
      <div style={{ margin: '15% 0px 0px 0px' }}>
        <img src={Background} />
      </div>
      <Link to={'/templateuser'}>
        <Button style={{ marginLeft: '5%' }}>Create CV</Button>
      </Link>
    </>
  )
}
