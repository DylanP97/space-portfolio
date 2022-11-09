import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import Modal from './Modal'
import { MDBSwitch } from 'mdb-react-ui-kit';

export const ProjectCard = ({ title, description, imgUrl, allImg, desktopImgs, mobileImgs, imgDesktop, imgMobile, imgPage2Desktop, imgPage2Mobile, technologies, repoLink }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [toggleDevice, setToggleDevice] = useState(true)

  const handleChange = () => { 
    setToggleDevice(!toggleDevice)   
    console.log('The checkbox was toggled'); 
  }; 
  
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
                <div className='technologies'>
                  {technologies && technologies.map((logo) => {
                      console.log(logo)
                      return (
                        <>
                          <img src={logo} alt='' style={{height:'40px', marginRight: '10px'}}/>
                          <br/>
                        </>
                      )
                    })}
                </div>
                <br/>
                <div className='switch-device'>
                  <span>desktop</span><MDBSwitch id='flexSwitchCheckChecked' label='' onChange={handleChange}/><span>smartphone</span>
                </div>
                <br />
                <div className='modalimg'>
                  { toggleDevice === true && (
                    <div className='modalimg-desktop'>
                      {desktopImgs?.map((img) => {
                          return (
                            <img src={img} alt={img}/>
                          )
                        })}
                    </div>
                  )}
                  { toggleDevice === false && (
                    <div className='modalimg-mobile'>
                      {mobileImgs?.map((img) => {
                        return (
                          <img src={img} alt={img}/>
                        )
                      })}
                 </div>
                  )}
                </div>
              </Modal>
          </div>
        </div>
    </Col>
  )
}
