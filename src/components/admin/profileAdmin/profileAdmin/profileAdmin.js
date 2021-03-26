import React, { useState } from 'react'
import Nav from '../../nav/nav'
import { Container, Row, Button, Col } from 'react-bootstrap'
import './profileAdmin.css'
import General from '../general/general'
import ChangePassword from '../changePassword/changePassword'
function ProfileAdmin() {
  const [displayGeneral, setDisplayGeneral] = useState('block')
  const [displayChange, setDisplayChange] = useState('none')

  return (
    <>
      <Nav />
      <div className="container-profile">
        <div className="left-sidebar">
          <Container>
            <Row>
              <Col sm={3}>
                <img />
              </Col>
              <Col sm={6}>
                <h3>Name </h3>
              </Col>
            </Row>
            <div className="left-sidebar-btn">
              <Row style={{ padding: '0x 20px' }}>
                <Button
                  className="btn-general"
                  onClick={() => {
                    setDisplayGeneral('block')
                    setDisplayChange('none')
                  }}
                >
                  General
                </Button>
              </Row>
              <Row>
                <Button
                  className="btn-changepassword"
                  onClick={() => {
                    setDisplayChange('block')
                    setDisplayGeneral('none')
                  }}
                >
                  Change password
                </Button>
              </Row>
            </div>
          </Container>
        </div>
        <div>
          <General display={displayGeneral} />
          <ChangePassword display={displayChange} />
        </div>
      </div>
    </>
  )
}
export default ProfileAdmin
