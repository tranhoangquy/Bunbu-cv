import { Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { Button } from 'react-bootstrap'
export default function DeleteModal(props) {
  const [showdeletemodal, setShowdeletemodal] = useState(false)

  const handleShowModalDel = () => {
    setShowdeletemodal(true)
  }
  const handleClose = () => {
    setShowdeletemodal(false)
  }
  return (
    <>
      <AiFillDelete onClick={handleShowModalDel} />
      <Modal show={showdeletemodal} onClick={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bạn có chắc chắn muốn xóa</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.name}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
