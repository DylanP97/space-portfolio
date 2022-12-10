import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ ".", ".", "."];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 100);
    const period = 3000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

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
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                        {({ isVisible }) => 
                        <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>                    
                            <span className='tagline'>Welcome to my Portfolio</span>
                            <h1>{`Hi I'm Dylan `}<span className='wrap'>{text}</span></h1>
                            <p>Here's my portfolio website built with React framework, scroll down to discover my skills and some projects I did recently!</p>
                            <button onClick={() => (window.location.href="#contact")}>Let's connect <ArrowRightCircle size={25} /></button>
                        </div>}
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}> 
                    <img src={headerImg} alt='Header Img'/>
                </Col>
            </Row>
        </Container>

    </section>
  )
}