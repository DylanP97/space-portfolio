import React from 'react'
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";

// banner
import OpenClassrooms from "../assets/logos/openclassrooms.png";
import JavaScript from "../assets/logos/javascript.png";
import Coding from "../assets/logos/codingimg.jpg"

// projects
import Booki_0_desktop from "../assets/projects/Booki_0_desktop.png"
import Booki_0_mobile from "../assets/projects/Booki_0_mobile.png"
import OhMyFood_desktop from "../assets/projects/OhMyFood_desktop.png"
import OhMyFood_mobile from "../assets/projects/OhMyFood_mobile.png"
import OhMyFood_menu_desktop from "../assets/projects/OhMyFood_menu_desktop.png"
import OhMyFood_menu_mobile from "../assets/projects/OhMyFood_menu_mobile.png"
import Groupomania_0_desktop from "../assets/projects/Groupomania_0_desktop.png"
import Groupomania_1_desktop from "../assets/projects/Groupomania_1_desktop.png"
import Groupomania_2_desktop from "../assets/projects/Groupomania_2_desktop.png"
import Groupomania_3_desktop from "../assets/projects/Groupomania_3_desktop.png"
import Groupomania_0_mobile from "../assets/projects/Groupomania_0_mobile.png"
import Groupomania_1_mobile from "../assets/projects/Groupomania_1_mobile.png"
import Groupomania_2_mobile from "../assets/projects/Groupomania_2_mobile.png"
import Groupomania_3_mobile from "../assets/projects/Groupomania_3_mobile.png"
import Kanap_0_desktop from "../assets/projects/Kanap_0_desktop.png"
import Kanap_1_desktop from "../assets/projects/Kanap_1_desktop.png"
import Kanap_2_desktop from "../assets/projects/Kanap_2_desktop.png"
import Kanap_0_mobile from "../assets/projects/Kanap_0_mobile.png"
import Kanap_1_mobile from "../assets/projects/Kanap_1_mobile.png"
import Kanap_2_mobile from "../assets/projects/Kanap_2_mobile.png"
import SpiritualAnimal_0_desktop from "../assets/projects/SpiritualAnimal_0_desktop.png"
import SpiritualAnimal_1_desktop from "../assets/projects/SpiritualAnimal_1_desktop.png"
import SpiritualAnimal_2_desktop from "../assets/projects/SpiritualAnimal_2_desktop.png"

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
            title: "Driving Blog",
            description: "A paid-access driving school blog where a teacher can edit and publish lessons-articles containing pictures, youtube videos and share with his students",
            imgUrl: Coding,
            repoLink: 'https://github.com/DylanP97/alexandreblog',
            technologies: [reacticon, jsxicon, javascripticon, bootstrapicon, nodejsicon, mongodbicon, sassicon, figmaicon]
        },
        {
            title: "Travel Blog",
            description: "A travel blog made with Sanity.io for the backend and Next.js for the frontend",
            imgUrl: Coding,
            repoLink: 'https://github.com/DylanP97/travel-blog',
            technologies: [javascripticon, nextjsicon, sanityicon]
        },
    ];
    
    const projectstab2 = [
        {
            title: "Groupomania",
            description: "A company's own social media, I made the front and the API, using React, Mongo, Node, Express",
            imgUrl: OpenClassrooms,
            desktopImgs: [Groupomania_0_desktop, Groupomania_1_desktop, Groupomania_2_desktop, Groupomania_3_desktop],
            mobileImgs: [Groupomania_0_mobile, Groupomania_1_mobile, Groupomania_2_mobile, Groupomania_3_mobile],
            repoLink: 'https://github.com/DylanP97/groupomaniap7',
            technologies: [reacticon, jsxicon, javascripticon, nodejsicon, mongodbicon, sassicon]
        },
        {
            title: "Hot Takes",
            description: "This was a backend project where I had to make the API routes & server of an Angular app",
            imgUrl: OpenClassrooms,
            repoLink: 'https://github.com/DylanP97/hottakesp6',
            technologies: [nodejsicon, javascripticon, mongodbicon]
        },
        {
            title: "Kanap",
            description: "I was in charge of creating all the Javascript functionnalities of this E-commerce website",
            imgUrl: OpenClassrooms,
            desktopImgs: [Kanap_0_desktop, Kanap_1_desktop, Kanap_2_desktop],
            mobileImgs: [Kanap_0_mobile, Kanap_1_mobile, Kanap_2_mobile],
            repoLink: 'https://github.com/DylanP97/kanapp5',
            technologies: [htmlicon, cssicon, javascripticon]
        },
        {
            title: "OhMyFood",
            description: "I was in charge of creating a cool frontend using animations with Sass! Such as a loader when changing pages, a smooth fade-in of cards, a heart button that fills itself when clicking and a rotating check when selecting a dish.",
            imgUrl: OpenClassrooms,
            desktopImgs: [OhMyFood_desktop, OhMyFood_menu_desktop],
            mobileImgs: [OhMyFood_mobile, OhMyFood_menu_mobile],
            repoLink: 'https://github.com/DylanP97/ohmyfoodp3',
            technologies: [htmlicon, cssicon, sassicon]
        },
        {
            title: "Booki",
            description: "Booki is a fictitious hotel reservation website. The website is responsive and can be displayed on desktop, tablet and smartphone devices. Simple Project using only HTML and CSS",
            imgUrl: OpenClassrooms,
            desktopImgs: [Booki_0_desktop],
            mobileImgs: [Booki_0_mobile],
            repoLink: 'https://github.com/DylanP97/bookip2',
            technologies: [htmlicon, cssicon]
        },
    ];

    const projectstab3 = [
        {
            title: "Spiritual Animal",
            description: "This is a little quiz to find your spiritual animal in 4 questions made with JavaScript",
            imgUrl: JavaScript,
            desktopImgs: [SpiritualAnimal_0_desktop, SpiritualAnimal_1_desktop, SpiritualAnimal_2_desktop],
            repoLink: 'https://github.com/DylanP97/spiritualanimal',
            technologies: [htmlicon, cssicon, javascripticon]
        },
        {
            title: "Example",
            description: "Example",
            imgUrl: JavaScript,
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
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                        <Nav.Item>
                            <Nav.Link eventKey="first">Best Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">OpenClassrooms</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">JavaScript Games</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
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
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Row>
                                {projectstab2.map((project, index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                        )
                                    })}
                            </Row>
                        </Tab.Pane>                        
                        <Tab.Pane eventKey="third">
                            <Row>
                                {projectstab3.map((project, index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                        )
                                    })}
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2} alt=''></img>
    </section>
  )
}
