import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import svg702 from "../assets/img/circle702.svg";
// import e15 from "../assets/img/15file.svg";
// import e30 from "../assets/img/30file.svg";
import e33 from "../assets/img/33file.svg";
// import e35 from "../assets/img/35file.svg";
import e40 from "../assets/img/40file.svg";
import e45 from "../assets/img/45file.svg";
import e50 from "../assets/img/50file.svg";
import e55 from "../assets/img/55file.svg";
import e60 from "../assets/img/60file.svg";
import e65 from "../assets/img/65file.svg";
import e70 from "../assets/img/70file.svg";
import e74 from "../assets/img/74file.svg";
import e75 from "../assets/img/75file.svg";
// import e79 from "../assets/img/79file.svg";
// import e80 from "../assets/img/80file.svg";
import e90 from "../assets/img/90file.svg";
import e93 from "../assets/img/93file.svg";
// import e96 from "../assets/img/96file.svg";
import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
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
                        <p>Here is a set of skills I have. The good news is that those numbers are very likely to increase in a near future!</p>
                        <Carousel draggable={true} autoPlaySpeed={1500} autoPlay={true} responsive={responsive} infinite={true} className="skill-slider">
                            <div className='item'>
                                <img src={e65} alt="meter1" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className='item'>
                                <img src={e70} alt="meter2" />
                                <h5>CSS / SCSS / Bootstrap</h5>
                            </div>
                            <div className='item'>
                                <img src={e65} alt="meter3" />
                                <h5>React / JSX</h5>
                            </div>
                            <div className='item'>
                                <img src={e55} alt="meter4" />
                                <h5>Node.js</h5>
                            </div>
                            <div className='item'>
                                <img src={e60} alt="meter4" />
                                <h5>RestAPI</h5>
                            </div>
                            <div className='item'>
                                <img src={e45} alt="meter4" />
                                <h5>SQL / MongoDB</h5>
                            </div>
                            <div className='item'>
                                <img src={e40} alt="meter4" />
                                <h5>Git / GitHub</h5>
                            </div>
                            <div className='item'>
                                <img src={e33} alt="meter4" />
                                <h5>PHP</h5>
                            </div>
                            <div className='item'>
                                <img src={e50} alt="meter4" />
                                <h5>Shopify Liquid</h5>
                            </div>
                            <div className='item'>
                                <img src={e90} alt="meter4" />
                                <h5>Shopify</h5>
                            </div>
                            <div className='item'>
                                <img src={e75} alt="meter4" />
                                <h5>Google Ads</h5>
                            </div>
                            <div className='item'>
                                <img src={e74} alt="meter4" />
                                <h5>Facebook Ads</h5>
                            </div>
                            <div className='item'>
                                <img src={e45} alt="meter4" />
                                <h5>SEO</h5>
                            </div>
                            <div className='item'>
                                <img src={e70} alt="meter4" />
                                <h5>Illustrator</h5>
                            </div>
                            <div className='item'>
                                <img src={e93} alt="meter4" />
                                <h5>English</h5>
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




