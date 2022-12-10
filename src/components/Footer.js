import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MailchimpForm } from './MailchimpForm'
import logo from "../assets/img/logo.svg"
import dylanLogo from '../assets/img/Logo-Dylan.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import GitHubIcon from '../assets/img/github-white.svg'
import WhatsappIcon from '../assets/img/whatsapp.svg'
import LinkedinIcon from '../assets/img/LinkedIn.svg'
import EmailIcon from '../assets/img/Email.svg'

export const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className="align-item-center">
             <MailchimpForm/>
             <Col sm={6}>
                <img src={dylanLogo} alt="logo"></img>
             </Col>
             <Col sm={6} className="text-center text-sm-end">
                <div className='social-icon'>
                  <a href='https://github.com/DylanP97?tab=repositories' className='github'><img src={GitHubIcon} alt="" /></a>
                  <a href='https://wa.me/+33788485314' className='whatsapp'><img src={WhatsappIcon} alt="" /></a>
                  <a href='mailto:dylan.pinheiro.1997@gmail.com' className='email-icon'><img src={EmailIcon} alt="" /></a>
                  <a href='https://www.linkedin.com/in/dylan-pinheiro-idy/' className='linkedin'><img src={LinkedinIcon} alt="" /></a>
                </div>
                <p>CopyRight 2022. All Right Reserved</p>
             </Col>
            </Row>
        </Container>
    </footer>
  )
}
