import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MailchimpForm from './MailchimpForm'
// import logo from '../assets/img/pi2.jpg'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-item-center'>
                    <MailchimpForm />
                    <Col sm={6}>
                        {/* <img src={logo} alt="Logo" className='logo-personal'/> */}
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/eberth-castro-294aa7196/"><BsLinkedin className='img' /></a>
                            <a href="https://github.com/EberthCastro?tab=repositories"><BsGithub className='img' /></a>
                            <a href="https://www.instagram.com/"><BsInstagram className='img' /></a>
                        </div>
                        <p>CopyRight 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
