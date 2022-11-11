import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import e15 from "../assets/img/15file.svg";
import e30 from "../assets/img/30file.svg";
import e35 from "../assets/img/35file.svg";
import e40 from "../assets/img/40file.svg";
import e45 from "../assets/img/45file.svg";
import e50 from "../assets/img/50file.svg";
import e55 from "../assets/img/55file.svg";
import e60 from "../assets/img/60file.svg";
import e65 from "../assets/img/65file.svg";
import e70 from "../assets/img/70file.svg";
import e75 from "../assets/img/75file.svg";
import e80 from "../assets/img/80file.svg";
import e90 from "../assets/img/90file.svg";
import colorSharp from "../assets/img/color-sharp.png";

// images technos
import javascripticon from "../assets/logos/javascripticon.png"
import mongodbicon from "../assets/logos/mongodbicon.svg"
import bootstrapicon from "../assets/logos/bootstrapicon.png"
import nodejsicon from "../assets/logos/nodejsicon.png"
import reacticon from "../assets/logos/reacticon.png"
import reduxicon from "../assets/logos/reduxicon.png"
import sanityicon from "../assets/logos/sanityicon.png"
import nextjsiconb from "../assets/logos/nextjsiconb.png"
import mysqlicon from "../assets/logos/mysqlicon.png"
import giticon from "../assets/logos/giticon.png"
import phpicon from "../assets/logos/phpicon.png"
import liquidicon from "../assets/logos/liquidicon.png"
import shopifyicon from "../assets/logos/shopifyicon.png"
import cssicon from "../assets/logos/cssicon.png"
import sassicon from "../assets/logos/sassicon.png"
import figmaicon from "../assets/logos/figmaicon.png"
import linuxicon from "../assets/logos/linuxicon.png"
import graphqlicon from "../assets/logos/graphqlicon.png"
import dockericon from "../assets/logos/dockericon.png"
import vuejsicon from "../assets/logos/vuejsicon.png"
import googleadsicon from "../assets/logos/googleadsicon.png"
import illustratoricon from "../assets/logos/illustratoricon.png"
import AnimatedBar from './AnimatedBar';


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 6000, min: 1310 },
            items: 5
        },
        largeDesktop: {
          breakpoint: { max: 1310, min: 992 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 992, min: 768 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 768, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>Skills</h2>
                        <p>Here is a set of skills I have. Filp the icons by hovering with your mouse!</p>
                        <Carousel autoPlaySpeed={1500} autoPlay={true} responsive={responsive} infinite={true} className="skill-slider" >
                            <div className='item'>
                                <h5>CSS</h5>
                                <div className='flip-box'>
                                    <img src={cssicon} alt="meter3"/>
                                    <img src={e70} alt="meter2" />
                                </div>
                            </div>                        
                            <div className='item'>
                                <h5>SCSS</h5>
                                <div className='flip-box'>
                                    <img src={sassicon} alt="meter3"/>
                                    <img src={e65} alt="meter1" />
                                </div>
                            </div>
                            <div className='item'>
                                <h5>Bootstrap</h5>
                                <div className='flip-box'>
                                    <img src={bootstrapicon} alt="meter3"/>
                                    <img src={e65} alt="meter1" />
                                </div>
                            </div>
                            <div className='item'>
                                <h5>JavaScript</h5>
                                <div className='flip-box'>
                                    <img src={javascripticon} alt="meter3"/>
                                    <img src={e65} alt="meter1" />
                                </div>
                            </div>
                            <div className='item'>
                                <h5>React.js</h5>
                                <div className='flip-box'>
                                    <img src={reacticon} alt="meter3"/>
                                    <img src={e65} alt="meter3" />
                                </div>
                            </div>
                            <div className='item'>
                                <h5>Redux</h5>
                                <div className='flip-box'>
                                    <img src={reduxicon} alt="meter3"/>
                                    <img src={e35} alt="meter3" />
                                </div>
                            </div>
                            <div className='item'>
                                <h5>Next.js</h5>
                                <div className='flip-box'>
                                    <img src={nextjsiconb} alt="meter3"/>
                                    <img src={e35} alt="meter3" />
                                </div>
                            </div>
                            <div className='item'>
                                <h5>Sanity.io</h5>
                                <div className='flip-box'>
                                    <img src={sanityicon} alt="meter3"/>
                                    <img src={e55} alt="meter3" />
                                </div>
                            </div>
                            <div className='item'>
                                <h5>Vue.js</h5>
                                <div className='flip-box'>
                                    <img src={vuejsicon} alt="meter3"/>
                                    <img src={e15} alt="meter4" />
                                </div>
                            </div>
                            <div className='item'>
                                <h5>Node.js</h5>
                                <div className='flip-box'>
                                    <img src={nodejsicon} alt="meter3"/>
                                    <img src={e70} alt="meter4" />
                                </div>
                            </div>
                            <div className='item'>
                                <h5>PHP</h5>
                                <div className='flip-box'>
                                    <img src={phpicon} alt="meter3"/>
                                    <img src={e30} alt="meter4" />
                                </div>
                            </div>
                            <div className='item'>
                                <h5>SQL</h5>
                                <div className='flip-box'>
                                    <img src={mysqlicon} alt="meter3"/>
                                    <img src={e30} alt="meter4" />
                                </div>
                            </div>
                            <div className='item'>
                                <h5>MongoDB</h5>
                                <div className='flip-box'>
                                    <img src={mongodbicon} alt="meter3"/>
                                    <img src={e80} alt="meter4" />
                                </div>
                            </div>
                            <div className='item'>
                                <h5>Git / GitHub</h5>
                                <div className='flip-box'>
                                    <img src={giticon} alt="meter3"/>
                                    <img src={e40} alt="meter4" />
                                </div>
                            </div>
                            <div className='item'>
                                <h5>Figma</h5>
                                <div className='flip-box'>
                                    <img src={figmaicon} alt="meter3"/>
                                    <img src={e65} alt="meter1" />
                                </div>
                            </div>
                            <div className='item'>
                                <h5>Linux</h5>
                                <div className='flip-box'>
                                    <img src={linuxicon} alt="meter3"/>
                                    <img src={e50} alt="meter1" />
                                </div>
                            </div>
                            <div className='item'>
                                <h5>Docker</h5>
                                <div className='flip-box'>
                                    <img src={dockericon} alt="meter3"/>
                                    <img src={e40} alt="meter1" />
                                </div>
                            </div>
                            <div className='item'>
                                <h5>GraphQL</h5>
                                <div className='flip-box'>
                                    <img src={graphqlicon} alt="meter3"/>
                                    <img src={e45} alt="meter1" />
                                </div>
                            </div>
                            <div className='item'>
                                <h5>Shopify Liquid</h5>
                                <div className='flip-box'>
                                    <img src={liquidicon} alt="meter3"/>
                                    <img src={e70} alt="meter4" />
                                </div>
                            </div>
                            <div className='item'>
                                <h5>Shopify</h5>
                                <div className='flip-box'>
                                    <img src={shopifyicon} alt="meter3"/>
                                    <img src={e90} alt="meter4" />
                                </div>
                            </div>
                            <div className='item'>
                                <h5>Google Ads</h5>
                                <div className='flip-box'>
                                    <img src={googleadsicon} alt="meter3"/>
                                    <img src={e75} alt="meter4" />
                                </div>
                            </div>
                            <div className='item'>
                                <h5>Illustrator</h5>
                                <div className='flip-box'>
                                    <img src={illustratoricon} alt="meter3"/>
                                    <img src={e70} alt="meter4" />
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image-left' src={colorSharp} alt='background-left'/>
    </section>
  )

}




