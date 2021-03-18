import React, { useState, useEffect } from 'react'
import Nav from '../nav'
import { Form, Button, Container } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import Navaccount from './nav-account'
import { useSelector, useDispatch } from 'react-redux'
import DeleteModal from './ShowModals/DeleteModal'
import EditModal from './ShowModals/EditModal'
import { loadUser } from '../../../actions/handlingUser'
import ClipLoader from 'react-spinners/ClipLoader'

export default function ListUser(props) {
  const css = { display: 'block', margin: '0 auto', borderColor: 'blue' }
  const data = useSelector((state) => state.users.data)
  const requesting = useSelector((state) => state.users.requesting)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser())
  }, [])
  return (
    <>
      <Nav />

      <Navaccount />
      <Container>
        <Form>
          <Form.Row>
            <Form.Control
              type="text"
              placeholder="Search"
              style={{ marginRight: 10 }}
            />
            <Button type="submit"> Search</Button>
          </Form.Row>
        </Form>
        {requesting ? (
          <ClipLoader color={'#000000'} loading={true} css={css} size={150} />
        ) : data && data.length > 0 ? (
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Ngày sinh</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>

            <tbody>
              {data.map(
                (e) => (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.role}</td>
                    <td>{e.dateofbirth}</td>
                    <td>
                      <DeleteModal id={e.id} name={e.name} email={e.email} />
                    </td>
                    <td>
                      <EditModal id={e.id} name={e.name} email={e.email} />
                    </td>
                  </tr>
                )
                // )
              )}
            </tbody>
          </Table>
        ) : (
          <h2 css={css}>Data empty</h2>
        )}
      </Container>
    </>
  )
}
