import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import colorSharp from "../assets/img/color-sharp.png";

// images technos
import javascripticon from "../assets/logos/javascripticon.png"
import typescripticon from "../assets/logos/typescripticon.png"
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
                        <p>Here is my set of skills, I'm constantly learning!</p>
                        
                        <Carousel autoPlaySpeed={2200} autoPlay={true} responsive={responsive} infinite={true} className="skill-slider" >
                            <div className='item'>
                                <h5>JavaScript</h5>
                                <div className='image-box'>
                                    <img src={javascripticon} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={75}/>
                            </div>
                            <div className='item'>
                                <h5>TypeScript</h5>
                                <div className='image-box'>
                                    <img src={typescripticon} alt=""/>                                    
                                </div>
                                <AnimatedBar className='rate' value={55}/>
                            </div>
                            <div className='item'>
                                <h5>React.js</h5>
                                <div className='image-box'>
                                    <img src={reacticon} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={70}/>
                            </div>
                            <div className='item'>
                                <h5>Redux</h5>
                                <div className='image-box'>
                                    <img src={reduxicon} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={65}/>
                            </div>
                            <div className='item'>
                                <h5>Next.js</h5>
                                <div className='image-box'>
                                    <img src={nextjsiconb} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={55}/>
                            </div>
                            <div className='item'>
                                <h5>Vue.js</h5>
                                <div className='image-box'>
                                    <img src={vuejsicon} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={40}/>
                            </div>

                            <div className='item'>
                                <h5>PHP</h5>
                                <div className='image-box'>
                                    <img src={phpicon} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={60}/>
                            </div>
                            <div className='item'>
                                <h5>MySQL</h5>
                                <div className='image-box'>
                                    <img src={mysqlicon} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={70}/>
                            </div>
                        </Carousel>
                        <br/>
                        <br/>
                        <Carousel autoPlaySpeed={800} rtl={true} autoPlay={true} responsive={responsive} infinite={true} className="skill-slider">
                            <div className='item'>
                                <h5>Node.js</h5>
                                <div className='image-box'>
                                    <img src={nodejsicon} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={80}/>
                            </div>
                            <div className='item'>
                                <h5>Git / GitHub</h5>
                                <div className='image-box'>
                                    <img src={giticon} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={70}/>
                            </div>
                            <div className='item'>
                                <h5>Linux</h5>
                                <div className='image-box'>
                                    <img src={linuxicon} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={50}/>
                            </div>
                            <div className='item'>
                                <h5>Docker</h5>
                                <div className='image-box'>
                                    <img src={dockericon} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={55}/>
                            </div>
                            <div className='item'>
                                <h5>GraphQL</h5>
                                <div className='image-box'>
                                    <img src={graphqlicon} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={65}/>
                            </div>
                            <div className='item'>
                                <h5>MongoDB</h5>
                                <div className='image-box'>
                                    <img src={mongodbicon} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={85}/>
                            </div>
                            <div className='item'>
                                <h5>Sanity.io</h5>
                                <div className='image-box'>
                                    <img src={sanityicon} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={70}/>
                            </div>
                        </Carousel>
                        <br/>
                        <br/>
                        <Carousel autoPlaySpeed={2600} autoPlay={true} responsive={responsive} infinite={true} className="skill-slider">
                            <div className='item'>
                                <h5>CSS</h5>
                                <div className='image-box'>
                                    <img src={cssicon} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={80}/>
                            </div>                        
                            <div className='item'>
                                <h5>Sass</h5>
                                <div className='image-box'>
                                    <img src={sassicon} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={75}/>
                            </div>
                            <div className='item'>
                                <h5>Bootstrap</h5>
                                <div className='image-box'>
                                    <img src={bootstrapicon} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={75}/>
                            </div>
                            <div className='item'>
                                <h5>Figma</h5>
                                <div className='image-box'>
                                    <img src={figmaicon} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={70}/>
                            </div>
                            <div className='item'>
                                <h5>Shopify Liquid</h5>
                                <div className='image-box'>
                                    <img src={liquidicon} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={75}/>
                            </div>
                            <div className='item'>
                                <h5>Shopify</h5>
                                <div className='image-box'>
                                    <img src={shopifyicon} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={95}/>
                            </div>
                            <div className='item'>
                                <h5>Google Ads</h5>
                                <div className='image-box'>
                                    <img src={googleadsicon} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={85}/>
                            </div>
                            <div className='item'>
                                <h5>Illustrator</h5>
                                <div className='image-box'>
                                    <img src={illustratoricon} alt=""/>
                                </div>
                                <AnimatedBar className='rate' value={75}/>
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




