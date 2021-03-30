import React,{useState} from 'react'
import Nav from '../../nav'
import bunbu from 'assets/bunbu.png'
import phoneIcon from 'assets/icon/phone.png'
import emailIcon from 'assets/icon/email.png'
import birthIcon from 'assets/icon/birthday.png'
import genderIcon from 'assets/icon/gender.png'
import addressIcon from 'assets/icon/address.png'
import { Row, Col, Form, Button, Container } from 'react-bootstrap'
import TextareaAutosize from 'react-textarea-autosize'
import './template1.css'
import {phonenumber,email} from 'pattern'
import { creatCV } from 'actions/handlingStaff'
import { useSelector, useDispatch } from 'react-redux'
export default function TemplateCv1() {
  const [valueCreateCv, setValueCreateCv] = useState({
    fullname:'',
    positionApplying:'',
    dateofbirth:'',
    sex:'',
    phonenumber:'',
    address:'',
    email:'',
    careergoals:'',
    education:'',
    workexperience:'',
    skill:'',
    project:'',
    preferences:''
  })
  // const data = useSelector((state) => state.users.data)
  // const requesting = useSelector((state) => state.users.requesting)
  const dispatch = useDispatch()
  const handleValue = (e) => {
    const { name, value } = e.target
    setValueCreateCv((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
 const handleSubmit = (e)=>{
   e.preventDefault();
   dispatch(creatCV({valueCreateCv}))
 }
return (
<>
<Nav />
<Container id="container">
  <Form onSubmit={handleSubmit} className="container-form"> 
    <Container className="personal-information">
      <Row>
        <Col sm={2}>
          <img src={bunbu} id="avatar" />
        </Col>
        <Col sm={3}>
          <Row>
            <Form.Control placeholder="Full name" name="fullname"
              required={true}
              value={valueCreateCv.fullname}
              onChange={handleValue} />
          </Row>
          <Row>
            <Form.Control placeholder="Position Applying" name="positionApplying"
            required={true}
              value={valueCreateCv.positionApplying}
              onChange={handleValue} />
          </Row>
          <Row sm={3} style={{ marginTop: '10px' }}>
            <Col sm={1}>
              <img src={birthIcon} className="icon-information" />
            </Col>
            <Col sm={10}>
              <Form.Control type="date" name="dateofbirth"  
              required={true}
              value={valueCreateCv.dateofbirth}
              onChange={handleValue}
              />
            </Col>
          </Row>
          <Row sm={3}>
            <Col sm={1}>
              <img src={genderIcon} className="icon-information" />
            </Col>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Sex" name="sex" 
                required={true}
                value={valueCreateCv.sex}
                onChange={handleValue}
              />
            </Col>
          </Row>
          <Row sm={3}>
            <Col sm={1}>
              <img src={phoneIcon} className="icon-information" />
            </Col>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Phonenumber"  name="phonenumber"
              required={true}
              value={valueCreateCv.phonenumber}
              onChange={handleValue}
              pattern={phonenumber}
              title="Phonenumber is invalid and 10 numbers"
              />
            </Col>
          </Row>
          <Row sm={3}>
            <Col sm={1}>
              <img src={addressIcon} className="icon-information" />
            </Col>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Address" name="address"
              required={true}
              value={valueCreateCv.address}
              onChange={handleValue}
              />
            </Col>
          </Row>
          <Row sm={3}>
            <Col sm={1}>
              <img src={emailIcon} className="icon-information" />
            </Col>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Email" name="email"
              required={true}
              value={valueCreateCv.email}
              onChange={handleValue}
                pattern={email}
                title="Email address is invalid"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <Container className="group-content-template1">
      <Row className="template1-cv"> 
        <Row className="content-title">
          <h5>Career goals</h5>
        </Row>
        <Row className="content">
          <TextareaAutosize type="text" name="careergoals"
           required={true}
           value={valueCreateCv.careergoals}
           onChange={handleValue}
          />
        </Row>
      </Row>
      <Row className="template1-cv"> 
        <Row className="content-title">
          <h5>Education</h5>
        </Row>
        <Row className="content">
          <TextareaAutosize type="text" name="education"
          required={true}
          value={valueCreateCv.education}
          onChange={handleValue}
          />
        </Row>
      </Row>
      <Row className="template1-cv">
        <Row className="content-title">
          <h5>Work experience</h5>
        </Row>
        <Row className="content">
          <TextareaAutosize type="text" name="workexperience"
          required={true}
          value={valueCreateCv.workexperience}
          onChange={handleValue}
          />
        </Row>
      </Row>
      <Row className="template1-cv">
        <Row className="content-title">
          <h5>Skill</h5>
        </Row>
        <Row className="content">
          <TextareaAutosize type="text" name="skill"
          required={true}
          value={valueCreateCv.skill}
          onChange={handleValue}
          />
        </Row>
      </Row>
      <Row className="template1-cv">
        <Row className="content-title">
          <h5>Project</h5>
        </Row>
        <Row className="content">
          <TextareaAutosize type="text" name="project"
           required={true}
           value={valueCreateCv.project}
           onChange={handleValue}
          />
        </Row>
      </Row>
      <Row className="template1-cv">
        <Row className="content-title">
          <h5>Preferences</h5>
        </Row>
        <Row className="content">
          <TextareaAutosize type="text" name="preferences"
          required={true}
          value={valueCreateCv.preferences}
          onChange={handleValue}
          />
        </Row>
      </Row>
      <Row>
        <Button type="submit">Save</Button>
      </Row>
    </Container>
  </Form>
</Container>
</>
)
}