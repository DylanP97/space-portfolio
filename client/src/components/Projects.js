import React from 'react'
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import Booki_desktop from "../assets/projects/Booki_desktop.png"
import Booki_mobile from "../assets/projects/Booki_mobile.png"
import OhMyFood_desktop from "../assets/projects/OhMyFood_desktop.png"
import OhMyFood_mobile from "../assets/projects/OhMyFood_mobile.png"
import OhMyFood_menu_desktop from "../assets/projects/OhMyFood_menu_desktop.png"
import OhMyFood_menu_mobile from "../assets/projects/OhMyFood_menu_mobile.png"
import SpiritualAnimal_0_desktop from "../assets/projects/SpiritualAnimal_0_desktop.png"
import SpiritualAnimal_1_desktop from "../assets/projects/SpiritualAnimal_1_desktop.png"
import SpiritualAnimal_2_desktop from "../assets/projects/SpiritualAnimal_2_desktop.png"



export const Projects = () => {

    const projectstab1 = [
        {
            title: "Booki",
            description: "Booki is a fictitious hotel reservation website. The website is responsive and can be displayed on desktop, tablet and smartphone devices. Simple Project using only HTML and CSS",
            imgUrl: projImg3,
            imgDesktop: Booki_desktop,
            imgMobile: Booki_mobile,
            repoLink: 'https://github.com/DylanP97/bookip2'
        },
        {
            title: "OhMyFood",
            description: "Oh My Food is a fictitious restaurant reservation website. The goal was to build the website design with SASS and add animations following the briefing. The website is responsive and can be displayed on desktop, tablet and smartphone devices.",
            imgUrl: projImg3,
            imgDesktop: OhMyFood_desktop,
            imgMobile: OhMyFood_mobile,
            imgPage2Desktop: OhMyFood_menu_desktop,
            imgPage2Mobile: OhMyFood_menu_mobile,
            repoLink: 'https://github.com/DylanP97/ohmyfoodp3'
        },
        {
            title: "Spiritual Animal",
            description: "This is a little quiz to find your spiritual animal in 4 questions made with JavaScript",
            imgUrl: projImg3,
            imgDesktop: [SpiritualAnimal_0_desktop, SpiritualAnimal_1_desktop, SpiritualAnimal_2_desktop],
            repoLink: 'https://github.com/DylanP97/spiritualanimal'
        },
    ];
    
    const projectstab2 = [
        {
            title: "Driving Blog",
            description: "A paid-access driving school blog where a teacher can edit and publish lessons-articles containing pictures, youtube videos and share with his students",
            imgUrl: projImg1,
            repoLink: 'https://github.com/DylanP97/alexandreblog',
        },
        {
            title: "Groupomania",
            description: "A company's own social media, I made the front and the API, with React, Mongo, Node, Express",
            imgUrl: projImg1,
            repoLink: 'https://github.com/DylanP97/groupomaniap7',
        },
        {
            title: "Hot Takes",
            description: "This was a backend project where I had to make the API routes & server of an Angular app",
            imgUrl: projImg1,
            repoLink: 'https://github.com/DylanP97/hottakesp6',
        },
    ];

    const projectstab3 = [
        {
            title: "Example",
            description: "Example",
            imgUrl: projImg2,
            repoLink: 'https://github.com/DylanP97/example',
        },
        {
            title: "Kanap",
            description: "In this project I had to create the Javascript functionalities of a basic E-commerce website",
            imgUrl: projImg2,
            repoLink: 'https://github.com/DylanP97/kanapp5',
        },
        {
            title: "SEO Agency",
            description: "Exercise to fix coding errors and enhances SEO, accessibility, loading speed of this agency's website by having 100 at Google's Lighthouse.",
            imgUrl: projImg2,
            repoLink: 'https://github.com/DylanP97/lagencepantherep4',
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
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
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
