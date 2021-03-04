import React, { useState, useEffect } from 'react'
import Nav from '../nav'
import { Form, Button, Container } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import Navaccount from './nav-account'
import { useSelector, useDispatch } from 'react-redux'
import DeleteModal from './ShowModals/DeleteModal'
import EditModal from './ShowModals/EditModal'
import { loadUser } from '../../../actions/index'
export default function ListStaff({ liststaffs, setListstaff }) {
  // const users = useSelector((state) => state.Accounts.users)
  const data = useSelector((state) => state.users.data)
  const requesting = useSelector((state) => state.users.requesting)
  console.log(data, requesting)
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
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Password</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          {/* <tbody> */}
          {requesting ? (
            <tbody>Loading</tbody>
          ) : data && data.length > 0 ? (
            <tbody>
              {data.map(
                (e) => (
                  // return (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.role}</td>
                    <td>{e.password}</td>
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
          ) : (
            <tbody>data emty</tbody>
          )}
          {/* </tbody> */}
        </Table>
      </Container>
    </>
  )
}
