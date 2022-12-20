import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from "../assets/img/space/contact-img.svg"

export const Contact = () => {

  return (
    <section className='contact' id='contact'>
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImg} alt='Contact Us'/>
                </Col>
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form
                     action="https://formsubmit.co/dylan.pinheiro.1997@gmail.com" method="POST">
                        <Row>
                            {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"/> */}
                            <input type="hidden" name="_subject" value="New submission!"/>


                            <Col sm={6} className='px-1'>
                                <input type="text"
                                name="firstName" placeholder="First Name"  required />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="text"
                                name="lastName" placeholder="Last Name" required />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="email"
                                name="email" placeholder="Email Address" required />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="tel"
                                name="tel" placeholder="Phone No." />
                            </Col>
                            <Col>
                                <textarea row="6"
                                name="message" placeholder="Write Your Message Here" required></textarea>
                                <button type="submit"><span>Send</span></button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
