import React from 'react'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import Booki_1 from "../assets/projects/Booki_1.png"
import Booki_2 from "../assets/projects/Booki_2.png"
import Booki_3 from "../assets/projects/Booki_3.png"

import Groupomania from "../assets/img/Groupomania.png";
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

    const projects = [
        {
            title: "Driving Blog",
            description: "A paid-access driving school blog where a teacher can edit and publish lessons-articles containing pictures, youtube videos and share with his students",
            imgUrl: projImg1
        },
        {
            title: "Groupomania",
            description: "A company's own social media, I made the interface and the API, with React, Mongo, Node, Express",
            imgUrl: Groupomania
        },
        {
            title: "Hot Takes",
            description: "This was a backend project where I had to make the API routes & server of an Angular app",
            imgUrl: projImg3
        },
        {
            title: "Kanap",
            description: "In this project I had to create the Javascript functionalities of a basic E-commerce website",
            imgUrl: projImg1
        },
        {
            title: "SEO Agency",
            description: "Exercise to fix coding errors and enhances SEO, accessibility, loading speed of this agency's website by having 100 at Google's LightHouse Test.",
            imgUrl: projImg2
        },
        {
            title: "Booki",
            description: "Design & Development",
            imgUrl: projImg3,
            allImg: [Booki_1, Booki_2, Booki_3],
            repoLink: 'https://github.com/DylanP97/bookip2'
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
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Lorem Ipsum </Tab.Pane>                        
                        <Tab.Pane eventKey="third">Lorem Ipsum </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2} alt=''></img>
    </section>
  )
}
