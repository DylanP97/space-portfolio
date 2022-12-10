import React, { useEffect, useRef, useState } from 'react'
import { Col } from 'react-bootstrap'
// import Modal from './Modal'
import { MDBSwitch } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import parse from 'html-react-parser';


export const ProjectCard = ({ title, description, imgUrl, mobileVid, desktopVid, technologies, repoLink, website }) => {
  const [toggleDevice, setToggleDevice] = useState(true)
  const [pageNbr, setPageNbr] = useState(0)
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSwitch = () => { 
    setToggleDevice(!toggleDevice)   
  };
  
  const changePage = (e) => {
    setPageNbr(e.target.id)
  };


  return (
    <Col sm={6} md={4}>
        <div className='proj-imgbx'>
          <img className='imgbx-banner' src={imgUrl} alt=''/>
          <div className='proj-txtx'>
              <h4>{title}</h4>
              <span className='descrption-text'>{description}</span><br/>
              <Button variant="primary" onClick={handleShow}>Check project</Button>
        
              <Modal show={show} style={{color: "white"}} className='modal-dialog-scrollable' onHide={handleClose}>
                <Modal.Header>
                  <Modal.Title>{title}</Modal.Title>
                  <button onClick={handleClose} className='btn-close btn-close-white'></button>
                </Modal.Header>
                <Modal.Body>
                  {description}
                  <br/>
                  {repoLink && <a href={repoLink} target="_blank" rel="noreferrer noopener">Code files</a>}<br/>
                  {website && <a href={website} target="_blank" rel="noreferrer noopener">Visit website</a>}
                  <div className='headband'>
                    <div className='technologies'>
                      {technologies && technologies.map((logo) => {
                        return (
                          <img src={logo} alt='' style={{height:'40px', marginRight: '10px'}}/>
                        )
                      })}
                    </div>
                    <div className='switch-div'>
                      <div className='switch-device'>
                        <span>desktop</span><MDBSwitch id='flexSwitchCheckChecked' label='' onChange={handleSwitch}/><span>smartphone</span>
                      </div>
                    </div>
                  </div>
                  <hr/>
                  <div className='video-showcase'>
                    { toggleDevice === false && (
                      <div>
                        {mobileVid && parse(mobileVid)}
                      </div>
                    )}
                    { toggleDevice === true && (
                      <div>
                        {desktopVid && parse(desktopVid)}
                      </div>
                    )}
                  </div>
                </Modal.Body>
              </Modal>
          </div> 
        </div>
    </Col>
  )
}
