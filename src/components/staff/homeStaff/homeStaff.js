import React from 'react'
import Nav from '../nav/nav'
import Container from 'react-bootstrap'
import './homeStaff.css'
import Background from '../../../assets/bunbu.png'
export default function HomeStaff(props) {
  return (
    <>
      <Nav />
      <div className="background">
        <img src={Background} />
      </div>
    </>
  )
}
