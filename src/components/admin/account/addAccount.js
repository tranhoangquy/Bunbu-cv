import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import Nav from '../nav'
import Navaccount from './nav-account'
export default function AddAccount() {
  return (
    <>
      <Nav />
      <Navaccount />
      <div>
        <h2 style={{ textAlign: 'center' }}>Add Account</h2>
      </div>
      <Form
        className="form-addacc"
        style={{ maxWidth: '800px', margin: 'auto' }}
      >
        <Row>
          <Row sm="13">
            <Col sm="3">
              <lable>Name:</lable>
            </Col>

            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter full name"
                required="true"
              />
            </Col>
          </Row>
          <Row sm="13">
            <Col sm="3">
              <lable>Email:</lable>
            </Col>
            <Col sm="10">
              <Form.Control
                type="email"
                placeholder="Enter email"
                required="true"
              />
            </Col>
          </Row>
        </Row>
        <Row>
          <Row sm="13">
            <Col sm="3">
              <lable>Sex:</lable>
            </Col>

            <Col sm="12" style={{ display: 'flex' }}>
              <input type="radio" id="male" value="male" name="sex" />
              Male
              <input type="radio" id="female" value="female" name="sex" />
              Female
            </Col>
          </Row>
          <Row sm="13" style={{ marginLeft: '96px' }}>
            <Col sm="5">
              <lable>Phone Number:</lable>
            </Col>
            <Col sm="9">
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                required="true"
              />
            </Col>
          </Row>
        </Row>
        <Row>
          <Row sm="13">
            <Col sm="3">
              <lable>Address:</lable>
            </Col>

            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter Address"
                required="true"
              />
            </Col>
          </Row>
          <Row sm="13">
            <Col sm="2">
              <lable>Role:</lable>
            </Col>
            <Col sm="12">
              <Form.Control as="select" style={{ marginTop: '-20px' }}>
                <option>Admin</option>
                <option>User</option>
                <option>HR</option>
              </Form.Control>
            </Col>
          </Row>
        </Row>
        <Row>
          <Col sm="3">
            <lable>Date of Birth:</lable>
          </Col>

          <Col sm="3">
            <Form.Control type="date" required="true" />
          </Col>
        </Row>
        <Button>Add</Button>
      </Form>
    </>
  )
}
