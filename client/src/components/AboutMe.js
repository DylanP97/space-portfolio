import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import TheSwan from "../assets/img/theswan.svg";


export const AboutMe = () => {
  return (
    <section className='aboutme' id="aboutme">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <h2>About Me</h2>
                    <p>I'm a very kind and funny person. I'm always eager to jump on new challenges, learn and discover new things!</p>
                </Col>
                <Col md={6}>
                    <img src={TheSwan} alt="TheSwan"/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
