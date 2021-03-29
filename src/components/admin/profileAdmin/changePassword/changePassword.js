import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import './changePassword.css'
export default function ChangePassword(props) {
  return (
    <Container
      className="container-changepassword"
      style={{
        display: props.display,
      }}
    >
      <Row>
        <p className="changepassword-profile">ChangePassword</p>
      </Row>
      <Form className="form-changepassword">
        <Row>
          <Col sm={6}>
            <p>Current Password</p>
          </Col>
          <Col sm={4}>
            <Form.Control
              text="password"
              type="password"
              placeholder="Current password"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <p>New Password</p>
          </Col>
          <Col sm={4}>
            <Form.Control
              name="newpassword"
              type="password"
              placeholder="New password"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <p>New Password Comfirmation</p>
          </Col>
          <Col sm={4}>
            <Form.Control
              name="newpasswordconfirm"
              type="password"
              placeholder="New password confirmation"
            />
          </Col>
        </Row>
        <Row>
          <Button type="submit">Save</Button>
        </Row>
      </Form>
    </Container>
  )
}
