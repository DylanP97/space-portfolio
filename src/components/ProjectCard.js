import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
// import Modal from './Modal'
import { MDBSwitch } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// import AnimatedBar from './AnimatedBar';
// import ProgressBar from 'react-bootstrap/ProgressBar';

export const ProjectCard = ({ title, description, imgUrl, allImg, desktopImgs, mobileImgs, imgDesktop, imgMobile, imgPage2Desktop, imgPage2Mobile, technologies, repoLink }) => {
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
        <img src={imgUrl} alt=''/>
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
                  {repoLink && <a href={repoLink}>Code Files</a>}
                  <div className='technologies'>
                    {technologies && technologies.map((logo) => {
                      return (
                        <>
                          <img src={logo} alt='' style={{height:'40px', marginRight: '10px'}}/>
                          <br/>
                        </>
                      )
                    })}
                  </div>
                  <hr/>
                  <div className='switch-div'>
                    <div className='switch-device'>
                      <span>desktop</span><MDBSwitch id='flexSwitchCheckChecked' label='' onChange={handleSwitch}/><span>smartphone</span>
                    </div>
                    { toggleDevice ? (
                      desktopImgs?.map((img, i) => {
                        return (
                          <button id={i} onClick={changePage} className={pageNbr === i ? 'btn-white' : 'btn-white'}>Page {i + 1}</button>
                        )})
                        ) : (
                      mobileImgs?.map((img, i) => {
                        return (
                          <button id={i} onClick={changePage} className={pageNbr === i ? 'btn-white' : 'btn-white'}>Page {i + 1}</button>
                        )})
                    )}
                  </div>
                  <br/>
                  <div className='modalimg'>
                    { toggleDevice === true && (
                      <div className='modalimg-desktop'>
                        {desktopImgs && <img src={desktopImgs[pageNbr]} alt={desktopImgs[pageNbr]}/>}
                      </div>
                    )}
                    { toggleDevice === false && (
                      <div className='modalimg-mobile'>
                        {mobileImgs && <img src={mobileImgs[pageNbr]} alt={mobileImgs[pageNbr]}/>}
                      </div>
                    )}
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
          </div> 
        </div>
    </Col>
  )
}
