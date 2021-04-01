import React, { useEffect,useMemo } from 'react'
import { Container, Row, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile } from 'actions/handlingAdmin'
import ClipLoader from 'react-spinners/ClipLoader'
import './general.css'
export default function General(props) {
  const data = useSelector((state) => state.users.data)
  const dispatch = useDispatch()
	const requesting = useSelector((state) => state.users.requesting)
  useEffect(() => {
    dispatch(fetchProfile())
  }, [])
	
  return (

		
    <Container
      className="container-general"
      style={{
        display: props.display,
      }}
    >
      <Row>
        <p className="general-profile">General Account Setting</p>
      </Row>
			{requesting ? (
          <ClipLoader loading={true} size={150} />
        ) : !!data? (
      <Container>
        <Row>
          <Col>
            <p>Private information</p>
          </Col>
        </Row>
                  
        <Row>

          <Col sm={2}>
            <p>Name:</p>
          </Col>
          <Col sm={4}>
            <p>{data.name}</p>
          </Col>
          <Col sm={2}>
            <p>Email:</p>
          </Col>
          <Col sm={4}>
            <p>{data.email}</p>
          </Col>
        </Row>
        <Row>
          <Col sm={2}>
            <p>Gender:</p>
          </Col>
          <Col sm={4}>
            <p>{data.sex}</p>
          </Col>
          <Col sm={2}>
            <p>Phone:</p>
          </Col>
          <Col sm={4}>
            <p>{data.phonenumber}</p>
          </Col>
        </Row>
        <Row>
          <Col sm={2}>
            <p>Birth day:</p>
          </Col>
          <Col sm={4}>
            <p>{data.dateofbirth}</p>
          </Col>
          <Col sm={2}>
            <p>Address:</p>
          </Col>
          <Col sm={4}>
            <p>{data.address}</p>
          </Col>
        
        </Row>
       
      </Container>
				):(
          <h2>Data empty</h2>
        )}
    </Container>
  )
}
