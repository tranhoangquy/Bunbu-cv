import React, { useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import { Row, Col, Form, Button, Container, Modal } from 'react-bootstrap'
import bunbu from 'assets/bunbu.png'
import homeIcon from 'assets/icon/home.png'
import phoneIcon from 'assets/icon/phone.png'
import emailIcon from 'assets/icon/email.png'
import birthIcon from 'assets/icon/birthday.png'
import genderIcon from 'assets/icon/gender.png'
import addressIcon from 'assets/icon/address.png'
import TextareaAutosize from 'react-textarea-autosize'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'
import './viewModal.css'
export default function ViewCvModal() {
  const [showEditCvModal, setShowEditCvModal] = useState(false)
  const handleShowEditCvModal = () => {
    setShowEditCvModal(true)
  }
  const handleClose = () => {
    setShowEditCvModal(false)
  }
  return (
    <>
      <AiFillEye onClick={handleShowEditCvModal} />
      <Modal
        className="listcv-modal"
        show={showEditCvModal}
        onHide={handleClose}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container id="container-editmodal">
            <Form>
              <Container className="personal-information">
                <Row>
                  <Col sm={4}>
                    <img src={bunbu} id="avatar" />
                  </Col>
                  <Col sm={8}>
                    <Row>
                      <Form.Control placeholder="Họ Tên" name="name" />
                    </Row>
                    <Row>
                      <Form.Control placeholder="Vị trí ứng tuyển" />
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
                        <Form.Control
                          type="text"
                          placeholder="Sex"
                          name="sex"
                        />
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
                    <h5>Mục tiêu nghề nghiệp</h5>
                  </Row>
                  <Row className="content">
                    <TextareaAutosize type="text" />
                  </Row>
                </Row>
                <Row>
                  <Row className="content-title">
                    <h5>Học Vấn</h5>
                  </Row>
                  <Row className="content">
                    <TextareaAutosize type="text" />
                  </Row>
                </Row>
                <Row>
                  <Row className="content-title">
                    <h5>Kinh nghiệm làm việc</h5>
                  </Row>
                  <Row className="content">
                    <TextareaAutosize type="text" />
                  </Row>
                </Row>
                <Row>
                  <Row className="content-title">
                    <h5>Kỹ năng</h5>
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
                    <h5>Sở thích</h5>
                  </Row>
                  <Row className="content">
                    <TextareaAutosize type="text" />
                  </Row>
                </Row>
                <Row>
                  <Col>
                    <Button type="submit">Sửa</Button>
                  </Col>
                  
                </Row>
              </Container>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}