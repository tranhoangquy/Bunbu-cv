import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { Row, Col, Form, Button, Container, Modal } from 'react-bootstrap'
import { email, password, phonenumber } from '../../../../pattern'
import { loadUser, updateUser } from '../../../../actions/handlingAdmin'
import { useSelector, useDispatch } from 'react-redux'
export default function EditModal(props) {
  const [showEditModal, setShowEditModal] = useState(false)
  const [valuesForm, setValuesForm] = useState({
    name: '',
    email: '',
    sex: '',
    phonenumber: '',
    address: '',
    role: '',
    dateofbirth: '',
    password: '',
  })
  const data = useSelector((state) => state.users.data)
  const requesting = useSelector((state) => state.users.requesting)
  const dispatch = useDispatch()
  const handleValue = (e) => {
    const { name, value } = e.target
    setValuesForm((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmitEdit = (e) => {
    dispatch(updateUser(props.id, valuesForm))
  }
  return (
    <>
      <AiFillEdit onClick={() => setShowEditModal(true)}></AiFillEdit>
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmitEdit}>
          <Modal.Body>
            <Container id="container">
              <Container className="personal-information">
                <Row>
                  <Col sm={8}>
                    <Row>
                      <Form.Control
                        placeholder={props.name}
                        name="name"
                        required={true}
                        value={valuesForm.name}
                        onChange={handleValue}
                      />
                    </Row>
                    <Row>
                      <Col sm={2}>
                        <>Role:</>
                      </Col>
                      <Col>
                        <Form.Control
                          as="select"
                          name="role"
                          value={valuesForm.role}
                          onChange={handleValue}
                          required={true}
                        >
                          <option value="">None</option>
                          <option>Admin</option>
                          <option>User</option>
                          <option>HR</option>
                        </Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Form.Control
                        placeholder={props.dateofbirth}
                        type="date"
                        name="dateofbirth"
                        required={true}
                        value={valuesForm.dateofbirth}
                        onChange={handleValue}
                      />
                    </Row>
                    <Row>
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
                          required={true}
                        />
                        Male
                        <input
                          type="radio"
                          id="female"
                          value="female"
                          name="sex"
                          required={true}
                        />
                        Female
                      </Col>
                    </Row>
                    <Row>
                      <Form.Control
                        name="phonenumber"
                        type="text"
                        placeholder="Phonenumber"
                        required={true}
                        pattern={phonenumber}
                        value={valuesForm.phonemumber}
                        onChange={handleValue}
                      />
                    </Row>
                    <Row>
                      <Form.Control
                        name="address"
                        type="text"
                        placeholder="Address"
                        required={true}
                        value={valuesForm.address}
                        onChange={handleValue}
                      />
                    </Row>
                    <Row>
                      <Form.Control
                        name="email"
                        type="text"
                        placeholder="Email"
                        required={true}
                        pattern={email}
                        value={valuesForm.Email}
                        onChange={handleValue}
                      />
                    </Row>
                    <Row>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        required={true}
                        pattern={password}
                        value={valuesForm.password}
                        onChange={handleValue}
                      />
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Save</Button>
            <Button onClick={() => setShowEditModal(false)}>Cancel</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}
