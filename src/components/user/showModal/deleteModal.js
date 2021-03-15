import { Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { Button } from 'react-bootstrap'
export default function DeleteModal() {
  const [showdeletemodal, setShowdeletemodal] = useState(false)

  const handleShowModal = () => {
    setShowdeletemodal(true)
  }
  const handleCloseShowmodal = () => {
    setShowdeletemodal(false)
  }
  return (
    <>
      <AiFillDelete onClick={handleShowModal} />
      <Modal show={showdeletemodal} onHide={handleCloseShowmodal}>
        <Modal.Header closeButton>
          <Modal.Title>Bạn có muốn xóa không</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={handleShowModal}>Yes</Button>
          <Button variant="secondary" onClick={handleCloseShowmodal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
