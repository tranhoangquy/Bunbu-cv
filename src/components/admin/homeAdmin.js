import React from 'react'
import Nav from './nav'
import Container from 'react-bootstrap'
import './homeAdmin.css'
import Background from '../../assets/background.jpg'
export default function HomeAdmin(props) {
    return (
        <>
            <Nav />
            <div style={{ margin: '15% 0px 0px 0px' }}>
                <img src={Background} />
            </div>
        </>
    )
}
