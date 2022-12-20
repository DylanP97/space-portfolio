import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
// import Modal from './Modal'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import parse from 'html-react-parser';


export const ProjectCard = ({ title, description, imgUrl, mobileVid, desktopVid, technologies, website }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <Col sm={6} md={4} className='proj-card'>
        <div className='proj-imgbx'>
          <img className='imgbx-banner' src={imgUrl} alt=''/>
          <div className='proj-txtx'>
              <h4>{title}</h4>
              <span className='descrption-text'>{description}</span>
              <Button style={{backgroundColor: "#4A2FBD", border: "none"}} onClick={handleShow}>Check project</Button>
        
              <Modal show={show} style={{color: "white"}} className='modal-dialog-scrollable' onHide={handleClose}>
                <Modal.Header>
                  <Modal.Title>{title}</Modal.Title>
                  <button onClick={handleClose} className='btn-close btn-close-white'></button>
                </Modal.Header>
                <Modal.Body>
                  <div className='headband'>
                    <div className='technologies'>
                        {technologies && technologies.map((logo) => {
                          return (
                            <img loading="lazy" src={logo} alt='' style={{height:'40px', marginRight: '10px'}}/>
                          )
                        })}
                      </div>
                    {website && <a href={website} target="_blank" rel="noreferrer noopener">Visit website</a>}
                  </div>
                  <hr style={{margin: "10px"}}/>
                  {/* <div className='video-showcase'>
                    {mobileVid && parse(mobileVid)}
                    {desktopVid && parse(desktopVid)}
                  </div> */}

                <div className='layout-modal-body' style={{display: 'flex'}}>
                  <div className='layout-second-container'>
                    <div className='second-container-video'>
                      {desktopVid && parse(desktopVid)}
                    </div>
                    <div className='second-container-text'>
                      <p>{description}</p>
                    </div>
                  </div>
                  <img src={imgUrl} alt={imgUrl} className='layout-first-container'/>
                </div>

                </Modal.Body>
              </Modal>
          </div> 
        </div>
    </Col>
  )
}
