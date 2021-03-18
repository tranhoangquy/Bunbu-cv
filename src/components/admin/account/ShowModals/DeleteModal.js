import { Modal } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser, loadUser } from '../../../../actions/handlingUser'
export default function DeleteModal(props) {
  const data = useSelector((state) => state.users.data)
  const requesting = useSelector((state) => state.users.requesting)
  const dispatch = useDispatch()
  const [showdeletemodal, setShowdeletemodal] = useState(false)

  const handleShowModalDel = () => {
    setShowdeletemodal(true)
  }
  const handleClose = () => {
    setShowdeletemodal(false)
  }

  const clickk = () => {
    dispatch(deleteUser(props.id))
  }
  return (
    <>
      <AiFillDelete onClick={handleShowModalDel} />
      <Modal show={showdeletemodal}>
        <Modal.Header closeButton>
          <Modal.Title>Bạn có chắc chắn muốn xóa</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.name}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={clickk}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
