import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from "../assets/img/contact-img.svg"

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setButtonText('Sending...');
    //     let response =  await fetch("http://localhost:5000/contact", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "Application/json;charset=utf-8",
    //         },
    //         body: JSON.stringify(formDetails)
    //     });
    //     setButtonText("Send");
    //     let result = response.json();
    //     setFormDetails(formInitialDetails);
    //     if (result.code === 200) {
    //         setStatus({ success: true, message: 'Message sent successfully'})
    //     } else {
    //         setStatus({ success: false, message: 'Something went wrong, please try again later.'})
    //     }
    // };

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
                    //  onSubmit={handleSubmit} 
                     action="https://formsubmit.co/dylan.pinheiro.1997@gmail.com" method="POST">
                        <Row>
                            {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"/> */}
                            <input type="hidden" name="_subject" value="New submission!"/>


                            <Col sm={6} className='px-1'>
                                <input type="text"
                                // value={formDetails.firstName} onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                name="firstName" placeholder="First Name"  required />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="text"
                                // value={formDetails.lastName} onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                name="lastName" placeholder="Last Name" required />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="email"
                                // value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} 
                                name="email" placeholder="Email Address" required />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="tel"
                                // value={formDetails.phone} onChange={(e) => onFormUpdate('phone', e.target.value)}
                                name="tel" placeholder="Phone No." />
                            </Col>
                            <Col>
                                <textarea row="6"
                                // value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)}
                                name="message" placeholder="Write Your Message Here" required></textarea>
                                <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
