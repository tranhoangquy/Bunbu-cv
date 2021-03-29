import React, { useState } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import Nav from '../nav'
import tem01 from '../../../assets/template1.jpg'
import tem02 from '../../../assets/template2.jpg'
import tem03 from '../../../assets/template3.jpg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
export default function TemplateUser(props) {
  const styles = {
    width: '330px',
    margin: ' 50px 30px 0 0',
  }
  return (
    <div style={{ backgroundColor: 'whitesmoke' }}>
      <Nav />
      <h2 style={{ marginTop: '82px', textAlign: 'center' }}> List Template</h2>

      <Form>
        <Form.Row>
          <Form.Control
            type="text"
            placeholder="Search"
            style={{ marginLeft: '25%', maxWidth: '500px' }}
          />
          <Button type="submit"> Search</Button>
          <Button style={{ marginLeft: '5%' }}>Add CV</Button>
        </Form.Row>
      </Form>

      <Container style={{ display: 'flex', height: '100vh' }}>
        <div>
          <Link to={'/templateUser1'}>
        <img src={tem01} style={{ ...styles }} />
        </Link>
        <img src={tem02} style={{ ...styles }} />
        <img src={tem03} style={{ ...styles }} />
        </div>
      </Container>
    </div>
  )
}
