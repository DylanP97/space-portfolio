import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import Modal from './Modal'

export const ProjectCard = ({ title, description, imgUrl, allImg, imgDesktop, imgMobile, repoLink }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Col sm={6} md={4}>
        <div className='proj-imgbx'>
        <img src={imgUrl} alt=''/>
          <div className='proj-txtx'>
              <h4>{title}</h4>
              <span>{description}</span><br/>
              <button onClick={() => setIsOpen(true)} className='btn-openpopup'>Open Popup</button>
              
              <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <h1>{title}</h1>
                <span>{description}</span><br/>
                {repoLink && <a style={{color:'white'}} href={repoLink}>GitHub Link</a>}
                <br/>
                <div className='modalimg'>
                  <img className='modalimg-mobile' src={imgMobile} alt=''/>
                  <img className='modalimg-desktop' src={imgDesktop} alt=''/>
                </div>

                {/* <div>
                  {allImg && allImg.map((image) => {
                      console.log(image)
                      return (
                        <>
                          <img src={image} alt='' style={{marginBottom:'20px'}}/>
                          <br/>
                        </>
                      )
                    })}
                </div> */}
              </Modal>
          </div>
        </div>
    </Col>
  )
}
