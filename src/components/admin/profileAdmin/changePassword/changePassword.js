import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { password } from '../../../../pattern'
import './changePassword.css'
export default function ChangePassword(props) {
  const [valueCurrentPw,setValueCurrentPw]=useState('')
  const [valueNewPw,setValueNewPw]=useState('')
  const [valueConfirmPw,setValueConfirmPw]=useState('')
  const [displayerr,setDisplayerr] = useState(false)
  const handlingSubmit =(e)=>{
    e.preventDefault()
   {valueConfirmPw != valueNewPw ? setDisplayerr(true):setDisplayerr(false)}
  }
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
      <Form className="form-changepassword" onSubmit={handlingSubmit}>
        <Row>
          <Col sm={6}>
            <p>Current Password</p>
          </Col>
          <Col sm={4}>
            <Form.Control
              text="password"
              type="password"
              name="currentPassword"
              placeholder="Current password"
              pattern={password}
              title="Password minimum 8 characters, at least one letter and a number"
              required={true}
              onChange={(e)=>{setValueCurrentPw(e.target.value)}}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <p>New Password</p>
          </Col>
          <Col sm={4}>
            <Form.Control
              name="newPassword"
              type="password"
              placeholder="New password"
              pattern={password}
              title="Password minimum 8 characters, at least one letter and a number"
              required={true}
              onChange={(e)=>{setValueNewPw(e.target.value)}}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <p>New Password Comfirmation</p>
          </Col>
          <Col sm={5}>
            <Form.Control
              name="confirmPassword"
              type="password"
              placeholder="New password confirmation"
              required={true}
              onChange={(e)=>{setValueConfirmPw(e.target.value  )}}
            />
            { displayerr ? <a className="err">Confirm password do not coincide New pasword</a>: null }
           
          </Col>
          
        </Row>
        <Row>
          <Button type="submit">Save</Button>
        </Row>
      </Form>
    </Container>
  )
}
