import { Modal } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from '../../../../actions/handlingAdmin'
import { getTranslatedText as t } from '../../../../i18next/translations/index'
export default function DeleteModal(props) {
  const data = useSelector((state) => state.users.data)
  const requesting = useSelector((state) => state.users.requesting)
  const dispatch = useDispatch()
  const [showdeletemodal, setShowdeletemodal] = useState(false)

  const handleClickDelete = () => {
    dispatch(deleteUser(props.id))
  }
  return (
    <>
      <AiFillDelete onClick={() => setShowdeletemodal(true)} />
      <Modal show={showdeletemodal}>
        <Modal.Header closeButton>
          <Modal.Title>{t('delete')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.name}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowdeletemodal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClickDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
