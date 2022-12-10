import React from 'react'
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";

// banner
import airbnb from "../assets/img/airbnb.jpg";
import illustration8 from "../assets/img/illustration-3.jpg";
import cleaning from "../assets/img/cleaning.jpg";
import social from "../assets/img/social.png";
import retroviseur from "../assets/img/retroviseur.jpg";
import rio from "../assets/img/rio.jpg";
import frioul from "../assets/img/frioul.jpg";
import citerouge from "../assets/img/citerouge.jpg";
import kanap from "../assets/img/kanap.png";
import tiger from "../assets/img/tiger.jpg";
import hangman from "../assets/img/download.png";

// logos images
import htmlicon from "../assets/logos/htmlicon.png"
import cssicon from "../assets/logos/cssicon.png"
import sassicon from "../assets/logos/sassicon.png"
import bootstrapicon from "../assets/logos/bootstrapicon.png"
import javascripticon from "../assets/logos/javascripticon.png"
import jsxicon from "../assets/logos/jsxicon.png"
import reacticon from "../assets/logos/reacticon.png"
import nextjsicon from "../assets/logos/nextjsicon.png"
import nodejsicon from "../assets/logos/nodejsicon.png"
import mongodbicon from "../assets/logos/mongodbicon.svg"
import figmaicon from "../assets/logos/figmaicon.png"
import sanityicon from "../assets/logos/sanityicon.png"


export const Projects = () => {

    const projectstab1 = [
        {
            title: "Airbnb Clone",
            description: "An Airbnb clone using Google Maps API with Sanity.io for the backend and Next.js for the frontend",
            imgUrl: airbnb,
            desktopVid: ``,
            mobileVid: ``,
            repoLink: 'https://github.com/DylanP97/alexandreblog',
            technologies: [reacticon, jsxicon, javascripticon, bootstrapicon, nodejsicon, mongodbicon, sassicon, figmaicon]
        },
        {
            title: "Japanese Restaurant",
            description: "A food order website using PHP and MySQL",
            imgUrl: illustration8,
            desktopVid: ``,
            mobileVid: ``,
            repoLink: 'https://github.com/DylanP97/travel-blog',
            technologies: []
        },
        {
            title: "Driving Teacher Blog",
            description: "A paid-access driving school blog where a teacher can edit and publish lessons-articles containing pictures, youtube videos and share with his students",
            imgUrl: retroviseur,
            desktopVid: ``,
            mobileVid: ``,
            repoLink: 'https://github.com/DylanP97/alexandreblog',
            technologies: [reacticon, jsxicon, javascripticon, bootstrapicon, nodejsicon, mongodbicon, sassicon, figmaicon]
        },
        {
            title: "Commercial Cleaning Site",
            description: "A commercial cleaning company needed a simple website. I've built a single page website in a few hours using React.",
            imgUrl: cleaning,
            desktopVid: `<iframe className="videoYTDesktop" src="https://www.youtube.com/embed/yfJr2jKQ9v4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            mobileVid: `<iframe className="videoYTDesktop" src="https://www.youtube.com/embed/qSLNRSA33Zw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            website: 'http://proxima-multiservices.com/',
            repoLink: 'https://github.com/DylanP97/proxima',
            technologies: [reacticon, jsxicon]
        },
        {
            title: "Travel Blog",
            description: "A travel blog made with Sanity.io for the backend and Next.js for the frontend",
            imgUrl: rio,
            desktopVid: ``,
            mobileVid: ``,
            repoLink: 'https://github.com/DylanP97/travel-blog',
            technologies: [javascripticon, nextjsicon, sanityicon]
        },
        {
            title: "Groupomania",
            description: "A company's own social media, I made the front and the API, using React, Mongo, Node, Express",
            imgUrl: social,
            desktopVid: ``,
            mobileVid: ``,
            repoLink: 'https://github.com/DylanP97/groupomaniap7',
            technologies: [reacticon, jsxicon, javascripticon, nodejsicon, mongodbicon, sassicon]
        },
        {
            title: "Kanap",
            description: "I was in charge of creating all the Javascript functionnalities of this E-commerce website",
            imgUrl: kanap,
            desktopVid: ``,
            mobileVid: ``,
            repoLink: 'https://github.com/DylanP97/kanapp5',
            technologies: [htmlicon, cssicon, javascripticon]
        },
        {
            title: "OhMyFood",
            description: "I was in charge of creating a cool frontend using animations with Sass! Such as a loader when changing pages, a smooth fade-in of cards, a heart button that fills itself when clicking and a rotating check when selecting a dish.",
            imgUrl: citerouge,
            desktopVid: ``,
            mobileVid: ``,
            repoLink: 'https://github.com/DylanP97/ohmyfoodp3',
            technologies: [htmlicon, cssicon, sassicon]
        },
        {
            title: "Booki",
            description: "Booki is a fictitious hotel reservation website. The website is responsive and can be displayed on desktop, tablet and smartphone devices. Simple Project using only HTML and CSS",
            imgUrl: frioul,
            desktopVid: `<iframe className="videoYTDesktop" src="https://www.youtube.com/embed/TmwQO8ADt4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            mobileVid: `<iframe className="videoYTDesktop" src="https://www.youtube.com/embed/N0tJqazG-FA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            repoLink: 'https://github.com/DylanP97/bookip2',
            technologies: [htmlicon, cssicon]
        },
        {
            title: "Spiritual Animal",
            description: "This is a little quiz to find your spiritual animal in 4 questions made with JavaScript",
            imgUrl: tiger,
            desktopVid: `<iframe className="videoYTDesktop" src="https://www.youtube.com/embed/A2OCqGQISKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            mobileVid: `<iframe className="videoYTDesktop" src="https://www.youtube.com/embed/VoeQalEKAjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            repoLink: 'https://github.com/DylanP97/spiritualanimal',
            technologies: [htmlicon, cssicon, javascripticon]
        },
        {
            title: "Hangman with TypeScript",
            description: "This is a React Hangman game, made using TypeScript",
            imgUrl: hangman,
            desktopVid: ``,
            mobileVid: ``,
            repoLink: 'https://github.com/DylanP97/example',
            technologies: [htmlicon, cssicon, javascripticon]
        },
    ];
    

  return (
    <section className='project' id='projects'>
        <Container>
            <Row>
                <Col>
                    <TrackVisibility>
                        {({ isVisible }) => 
                        <div className={isVisible ? 'animate__animated animate__bounce' : ''}>                    
                            <h2>Projects</h2>
                            <p>Below are coding projects I worked on and helped me grow in my developper journey. (Currently working on adding the projects to this section)</p>
                        </div>}
                    </TrackVisibility>
                    <Container>
                        <Row>
                            {projectstab1.map((project, index) => {
                                return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                    />
                                )
                            })}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2} alt=''></img>
    </section>
  )
}
