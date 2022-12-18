import React from 'react'
import { Button ,Container} from 'react-bootstrap'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Stack from 'react-bootstrap/esm/Stack'
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <Container fluid>
        <Row>
            <Col md={6}>
                <span>Logo</span>
            </Col>
            <Col md={6}>
                <Stack direction="horizontal" >
                    <Link className='px-3 py-2' to="/">Home</Link>
                    <Link className='px-3 py-2' to="/product">Product</Link>
                    <Link className='px-3 py-2' to="/profile">Profile</Link>
                    <Link className='px-3 py-2' to="/login">Login</Link>
                    <Link className='px-3 py-2' to="/sign-up">Sign Up</Link>
                </Stack>
            </Col>
        </Row>
    </Container>
  )
}
