import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Full-Stack Web Developer..."];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 100);
    const period = 3000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text, delta])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
    setText(updatedText);

    if (isDeleting){
        setDelta(prevDelta => prevDelta /3)
    }

    if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
    } else if(isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(100);
    }
}

  return (
    <section className='banner' id='home'>
        <TrackVisibility partialVisibility>
            {({ isVisible }) => 
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Dylan `}<span className='wrap'>{isVisible && text}</span></h1>
                        <p>Here's my portfolio website built with React, scroll down to discover my skills and some projects I did.</p>
                        <p>By the way this upper typing animation will stop once it isn't in your screen view.</p>
                        <button onClick={() => (window.location.href="#contact")}>Let's connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}> 
                        <img src={headerImg} alt='Header Img' loading="lazy"/>
                    </Col>
                </Row>
            </Container>
            }
        </TrackVisibility>
    </section>
  )
}
