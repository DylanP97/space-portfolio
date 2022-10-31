import React, { useState, useEffect } from 'react'
import { Col, Row, Alert } from 'react-bootstrap'

export const Newsletter = ({ onValidated, status, message }) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === 'success') clearFields()
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        })
    }

    const clearFields = () => {
        setEmail('');
    }

  return (
    <Col lg={12}>
        <div className='newsletter-bx'>
            <Row>
                    <h3>Thanks for stopping by! 👨‍🚀</h3>
                    {/* {status === 'sending' && <Alert>Sending...</Alert>}
                    {status === 'error' && <Alert variant="danger">{message}</Alert>}
                    {status === 'success' && <Alert variant="success">{message}</Alert>} */}
            </Row>
        </div>
    </Col>
  )
}
