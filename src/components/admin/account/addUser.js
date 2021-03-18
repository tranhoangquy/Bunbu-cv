import React, { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import Nav from '../nav'
import Navaccount from './nav-account'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../../../actions/handlingUser'
export default function AddUser() {
  const data = useSelector((state) => state.users.data)
  const requesting = useSelector((state) => state.users.requesting)
  const dispatch = useDispatch()
  const [valuesform, setValuesform] = useState({
    name: '',
    email: '',
    sex: '',
    phonenumber: '',
    address: '',
    role: 'Admin',
    dateofbirth: '',
    password: '',
  })

  const handlevalue = (e) => {
    const { name, value } = e.target
    setValuesform((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handlesubmit = (event) => {
    event.preventDefault()
    dispatch(addUser({ valuesform }))
  }
  return (
    <>
      <Nav />
      <Navaccount />
      <div>
        <h2 style={{ textAlign: 'center' }}>Add Account</h2>
      </div>
      <Form
        onSubmit={handlesubmit}
        className="form-addacc"
        style={{ maxWidth: '500px', margin: 'auto' }}
      >
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
                value={valuesform.name}
                onChange={handlevalue}
                required="true"
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
                value={valuesform.email}
                onChange={handlevalue}
                required="true"
                pattern="^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$"
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
              sm="10"
              style={{ display: 'flex' }}
              name="sex"
              value={valuesform.sex}
              onChange={handlevalue}
            >
              <input
                type="radio"
                id="male"
                value="male"
                name="sex"
                required="true"
              />
              Male
              <input
                type="radio"
                id="female"
                value="female"
                name="sex"
                required="true"
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
                required="true"
                pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"
                title="Phonenumber is invalid and 10 numbers"
                value={valuesform.phonemumber}
                onChange={handlevalue}
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
                value={valuesform.address}
                onChange={handlevalue}
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
                value={valuesform.role}
                onChange={handlevalue}
                required="true"
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
                value={valuesform.dateofbirth}
                onChange={handlevalue}
                required="true"
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
                value={valuesform.password}
                onChange={handlevalue}
                required="true"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
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
