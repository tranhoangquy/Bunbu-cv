import React, { useState } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import Nav from '../nav'
import tem01 from '../../../assets/template1.jpg'
import tem02 from '../../../assets/template2.jpg'
import tem03 from '../../../assets/template3.jpg'
export default function Template(props) {
    const styles = {
        width: '330px',
        margin: ' 50px 30px 0 0',
    }
    const [templ, setTempl] = useState([tem01, tem02, tem03])
    return (
        <div style={{ backgroundColor: 'whitesmoke' }}>
            <Nav />
            <h2 style={{ marginTop: '82px', textAlign: 'center' }}>
                {' '}
                List Template
            </h2>
            <Button style={{ marginLeft: '18%' }}>Add CV</Button>

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

            <Container style={{ display: 'flex', height: '100vh' }}>
                <div>
                    {templ.map((e) => {
                        return (
                            <>
                                {' '}
                                <img src={e} style={{ ...styles }} />
                            </>
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}
