import React, { useState } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import Nav from '../../nav'
import tem01 from '../../../../assets/template1.jpg'
import tem02 from '../../../../assets/template2.jpg'
import tem03 from '../../../../assets/template3.jpg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './listTemplate.css'
export default function TemplateUser(props) {

  return (
    <div >
      <Nav />
      <h2 className="title"> List Template</h2>

      <Form className="container-template">
        <Form.Row>
          <Form.Control
            type="text"
            placeholder="Search"
          />
          <Button type="submit"> Search</Button>
          <Button className="btn-add">Add CV</Button>
        </Form.Row>
      </Form>

      <Container className="template1" >
        <div>
          <Link to={'/templates/1'}>
        <img src={tem01} className="template"/>
        </Link>
        <img src={tem02} className="template"/>
        <img src={tem03} className="template"/>
        </div>
      </Container>
    </div>
  )
}
