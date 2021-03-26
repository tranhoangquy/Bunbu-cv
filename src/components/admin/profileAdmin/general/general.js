import React from 'react'
import { Container, Row, Button, Col } from 'react-bootstrap'
import './general.css'
export default function General(props) {
  return (
    <Container
      className="container-general"
      style={{
        display: props.display,
      }}
    >
      <Row>
        <p className="general-profile">General Account Setting</p>
      </Row>
      <Container>
        <Row>
          <Col>
            <p>Private information</p>
          </Col>
        </Row>
        <Row>
          <Col sm={2}>
            <p>Name:</p>
          </Col>
          <Col sm={4}>
            <p>name profile</p>
          </Col>
          <Col sm={2}>
            <p>Email:</p>
          </Col>
          <Col sm={4}>
            <p>email profile</p>
          </Col>
        </Row>
        <Row>
          <Col sm={2}>
            <p>Gender:</p>
          </Col>
          <Col sm={4}>
            <p>Name</p>
          </Col>
          <Col sm={2}>
            <p>Phone:</p>
          </Col>
          <Col sm={4}>
            <p>0123456789</p>
          </Col>
        </Row>
        <Row>
          <Col sm={2}>
            <p>Birth day:</p>
          </Col>
          <Col sm={4}>
            <p>22/10/1998</p>
          </Col>
          <Col sm={2}>
            <p>Address:</p>
          </Col>
          <Col sm={4}>
            <p>Ha Noi</p>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
