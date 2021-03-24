import React, { useState, useEffect } from 'react'
import Nav from '../../nav/nav'
import { Form, Button, Container } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import Navaccount from '../../navAccount/navAccount'
import { useSelector, useDispatch } from 'react-redux'
import DeleteModal from '../ShowModals/DeleteModal'
import EditModal from '../ShowModals/EditModal'
import { loadUser, searchUser } from '../../../../actions/handlingUser'
import ClipLoader from 'react-spinners/ClipLoader'
import './listUser.css'
export default function ListUser(props) {
  const data = useSelector((state) => state.users.data)
  const requesting = useSelector((state) => state.users.requesting)
  const dispatch = useDispatch()
  const [valueSearch, setValueSearch] = useState('')
  const searchListUser = () => {
    dispatch(searchUser(props.name, valueSearch))
  }
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
              onChange={(e) => {
                setValueSearch(e.target.value)
              }}
            />
            <Button onClick={searchListUser}> Search</Button>
          </Form.Row>
        </Form>
        {requesting ? (
          <ClipLoader loading={true} size={150} />
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
              {data.map((e) => (
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
              ))}
            </tbody>
          </Table>
        ) : (
          <h2>Data empty</h2>
        )}
      </Container>
    </>
  )
}
