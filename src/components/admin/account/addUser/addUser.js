import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import Nav from '../../nav/nav'
import Navaccount from '../../navAccount/navAccount'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../../../../actions/handlingUser'
import { email, phonenumber, password } from '../../../../pattern'
import './addUser.css'
export default function AddUser() {
  const data = useSelector((state) => state.users.data)
  const requesting = useSelector((state) => state.users.requesting)
  const dispatch = useDispatch()
  const [valuesForm, setValuesForm] = useState({
    name: '',
    email: '',
    sex: '',
    phonenumber: '',
    address: '',
    role: 'Admin',
    dateofbirth: '',
    password: '',
  })

  const handleValue = (e) => {
    const { name, value } = e.target
    setValuesForm((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addUser({ valuesForm }))
  }
  return (
    <>
      <Nav />
      <Navaccount />
      <div>
        <h2 style={{ textAlign: 'center' }}>Add Account</h2>
      </div>
      <Form onSubmit={handleSubmit} className="form-addacc">
        <Form.Group controlId="validationCustom01">
          <Row sm="13">
            <Col sm="3">
              <p>Name:</p>
            </Col>

            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter full name"
                name="name"
                value={valuesForm.name}
                onChange={handleValue}
                required={'true'}
              />
            </Col>
          </Row>
          <Row sm="13">
            <Col sm="3">
              <>Email:</>
            </Col>
            <Col sm="10">
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={valuesForm.email}
                onChange={handleValue}
                required={'true'}
                pattern={email}
                title="Email address is invalid"
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row sm="13">
            <Col sm="3">
              <>Sex:</>
            </Col>

            <Col
              className="sex"
              sm="10"
              name="sex"
              value={valuesForm.sex}
              onChange={handleValue}
            >
              <input
                type="radio"
                id="male"
                value="male"
                name="sex"
                required={'true'}
              />
              Male
              <input
                type="radio"
                id="female"
                value="female"
                name="sex"
                required={'true'}
              />
              Female
            </Col>
          </Row>
          <Row sm="13">
            <Col sm="3">
              <>Phone Number:</>
            </Col>
            <Col sm="10">
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                name="phonemumber"
                required={'true'}
                pattern={phonenumber}
                title="Phonenumber is invalid and 10 numbers"
                value={valuesForm.phonemumber}
                onChange={handleValue}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row sm="13">
            <Col sm="3">
              <>Address:</>
            </Col>

            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter Address"
                name="address"
                value={valuesForm.address}
                onChange={handleValue}
              />
            </Col>
          </Row>
          <Row sm="13">
            <Col sm="2">
              <>Role:</>
            </Col>
            <Col sm="12">
              <Form.Control
                as="select"
                name="role"
                value={valuesForm.role}
                onChange={handleValue}
                required={'true'}
              >
                <option>Admin</option>
                <option>User</option>
                <option>HR</option>
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row sm="13">
            <Col sm="3">
              <>Date of Birth:</>
            </Col>
            <Col sm="10">
              <Form.Control
                type="date"
                name="dateofbirth"
                value={valuesForm.dateofbirth}
                onChange={handleValue}
                required={'true'}
              />
            </Col>
          </Row>
          <Row sm="13">
            <Col sm="3">
              <>Password:</>
            </Col>

            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter Password"
                name="password"
                value={valuesForm.password}
                onChange={handleValue}
                required={'true'}
                pattern={password}
                title="Password minimum 8 characters, at least one letter and a number"
              />
            </Col>
          </Row>
        </Form.Group>
        <Button type="submit">Add</Button>
      </Form>
    </>
  )
}
