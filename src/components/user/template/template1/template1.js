import React from 'react'
import Nav from '../../nav'
import bunbu from '../../../../assets/bunbu.png'
// import homeIcon from '../../../../assets/icon/home.png'
// import phoneIcon from '../../../../assets/icon/phone.png'
// import emailIcon from '../../../../assets/icon/email.png'
// import birthIcon from '../../../../assets/icon/birthday.png'
// import genderIcon from '../../../../assets/icon/gender.png'
// import addressIcon from '../../../../assets/icon/address.png'
import { Row, Col, Form, Button, Container } from 'react-bootstrap'
import TextareaAutosize from 'react-textarea-autosize'
import './template1.css'
export default function TemplateCv1() {
  return (
    <>
      <Nav />
      <Container id="container">
        <Form>
          <Container className="personal-information">
            <Row>
              <Col sm={2}>
                <img src={bunbu} id="avatar" />
              </Col>
              <Col sm={3}>
                <Row>
                  <Form.Control placeholder="Full name" name="name" />
                </Row>
                <Row>
                  <Form.Control placeholder="Position Applying" />
                </Row>
                <Row sm={3} style={{ marginTop: '10px' }}>
                  <Col sm={1}>
                    <img src={birthIcon} className="icon-information" />
                  </Col>
                  <Col sm={10}>
                    <Form.Control type="date" name="dateofbirth" />
                  </Col>
                </Row>
                <Row sm={3}>
                  <Col sm={1}>
                    <img src={genderIcon} className="icon-information" />
                  </Col>
                  <Col sm={10}>
                    <Form.Control type="text" placeholder="Sex" name="sex" />
                  </Col>
                </Row>
                <Row sm={3}>
                  <Col sm={1}>
                    <img src={phoneIcon} className="icon-information" />
                  </Col>
                  <Col sm={10}>
                    <Form.Control type="text" placeholder="Phonenumber" />
                  </Col>
                </Row>
                <Row sm={3}>
                  <Col sm={1}>
                    <img src={addressIcon} className="icon-information" />
                  </Col>
                  <Col sm={10}>
                    <Form.Control type="text" placeholder="Address" />
                  </Col>
                </Row>
                <Row sm={3}>
                  <Col sm={1}>
                    <img src={emailIcon} className="icon-information" />
                  </Col>
                  <Col sm={10}>
                    <Form.Control type="text" placeholder="Email" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container className="group-content">
            <Row>
              <Row className="content-title">
                <h5>Career goals</h5>
              </Row>
              <Row className="content">
                <TextareaAutosize type="text" />
              </Row>
            </Row>
            <Row>
              <Row className="content-title">
                <h5>Education</h5>
              </Row>
              <Row className="content">
                <TextareaAutosize type="text" />
              </Row>
            </Row>
            <Row>
              <Row className="content-title">
                <h5>Work experience</h5>
              </Row>
              <Row className="content">
                <TextareaAutosize type="text" />
              </Row>
            </Row>
            <Row>
              <Row className="content-title">
                <h5>Skill</h5>
              </Row>
              <Row className="content">
                <TextareaAutosize type="text" />
              </Row>
            </Row>
            <Row>
              <Row className="content-title">
                <h5>Project</h5>
              </Row>
              <Row className="content">
                <TextareaAutosize type="text" />
              </Row>
            </Row>
            <Row>
              <Row className="content-title">
                <h5>Preferences</h5>
              </Row>
              <Row className="content">
                <TextareaAutosize type="text" />
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