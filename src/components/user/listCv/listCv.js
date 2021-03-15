import React from 'react'
import { Container, Button, Row, Col, Form } from 'react-bootstrap'
import Nav from '../nav'
import tmp01 from '../../../assets/template1.jpg'
import DeleteModal from '../showModal/deleteModal'
export default function ListCv() {
  return (
    <>
      <Nav />
      <Container style={{ marginTop: '136px' }}>
        <Form>
          <Row>
            <Col sm={5}>
              <Form.Control
                type="text"
                placeholder="Search"
                style={{ marginRight: 10 }}
              />
            </Col>
            <Col sm={3}>
              {' '}
              <Button type="submit"> Search</Button>
            </Col>
          </Row>
        </Form>
        <Container
          style={{
            marginTop: '75px',
            border: '1px solid #E5E5E5',
            boxShadow: '4px 3px #888888',
            borderLeft: '1px solid',
          }}
        >
          <Row>
            <Col>
              {' '}
              <img src={tmp01} style={{ height: '135px', width: '115px' }} />
            </Col>
            <Col style={{ marginTop: '36px' }}>
              <Row>
                <p>Title:</p>
                <Col>
                  <p>Cv Thực tập Reactjs</p>
                </Col>
              </Row>
              <Row>
                <p>Loaction:</p>
                <Col>
                  <p>Ha Noi</p>
                </Col>
              </Row>
            </Col>
            <Col style={{ marginTop: '36px' }}>
              {' '}
              <Row>
                <Col>
                  <p>07-11-2020 07:52 AM</p>
                </Col>
              </Row>
            </Col>
            <Col style={{ marginTop: '50px' }}></Col>
            <Col style={{ marginTop: '50px' }}>
              <DeleteModal />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}
