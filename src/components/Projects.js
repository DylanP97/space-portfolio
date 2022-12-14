import React from 'react'
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/space/color-sharp2.png";

// project banner
import airbnb from "../assets/img/airbnb.jpg";
import illustration8 from "../assets/img/illustration-3.jpg";
import social from "../assets/img/social.png";
import retroviseur from "../assets/img/retroviseur.jpg";
import travel from "../assets/img/travel.jpg";
import citerouge from "../assets/img/citerouge.jpg";
import tiger from "../assets/img/tiger.jpg";
import hangman from "../assets/img/download.png";
import weather from "../assets/img/weather.webp";

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
import sanityicon from "../assets/logos/sanityicon.png"
import typescripticon from "../assets/logos/typescripticon.png"
import phpicon from "../assets/logos/phpicon.png"
import mysqlicon from "../assets/logos/mysqlicon.png"
import mapboxicon from "../assets/logos/mapboxglicon.png"
import mapsicon from "../assets/logos/mapsicon.webp"
import vitejsicon from "../assets/logos/vitejsicon.svg"


export const Projects = () => {

    const projects = [
        {
            title: "PHP MySQL Simple restaurant website",
            description: "A japanese restaurant website using PHP and MySQL with a customer front-end website, where teh customers can order their food. And an admin interface for managing admins, categories, menus and orders.",
            imgUrl: illustration8,
            desktopVid: `<iframe className="videoYTDesktop" src="https://www.youtube.com/embed/MfBjQn0dXRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            technologies: [phpicon, mysqlicon]
        },
        {
            title: "MERN Driving blog",
            description: "A MERN driving school blog where a teacher can edit and publish lessons-articles containing pictures, youtube videos and share with his students. The modifications in the editor are auto-saved in the server. The admin can manage his articles visibility and students access directly in the application interface.",
            imgUrl: retroviseur,
            desktopVid: `<iframe className="videoYTDesktop" src="https://www.youtube.com/embed/4oPubxlP2Xk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
            technologies: [reacticon, jsxicon, bootstrapicon, nodejsicon, mongodbicon, sassicon]
        },
        {
            title: "MERN Social Media",
            description: "A company's own social media, I made the front and the API, using React, Mongo, Node, Express. The user should signup with an email address related to the company. A user can view and comment all posts as well as creating new ones and delete his own posts. The user with an admin level can edit and delete every posts. The app is responsive and works nicely on smartphones.",
            imgUrl: social,
            desktopVid: `<iframe className="videoYTDesktop" src="https://www.youtube.com/embed/LDsw6tyIauI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            technologies: [reacticon, jsxicon, javascripticon, nodejsicon, mongodbicon, sassicon]
        },
        {
            title: "NextJS Airbnb",
            description: "An Airbnb clone using Google Maps API with Sanity.io for the backend and Next.js for the frontend. This project was interesting to get to know the Google Maps API, styling the map itself, the markers, and passing price data through them. Also styling a fixed navbar so it can let only the left side to scroll down in the grid of propreties",
            imgUrl: airbnb,
            desktopVid: `<iframe className="videoYTDesktop" src="https://www.youtube.com/embed/TsejaJZ75Uw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            technologies: [javascripticon, nextjsicon, sanityicon, mapsicon]
        },
        {
            title: "NextJS Travel blog",
            description: "A travel blog made with Sanity.io for the backend and Next.js for the frontend. In the sanity desk the API of Google Maps is used but in my frontend app I use MapboxGL to display the map at the bottom of the article. Sanity is a really interesting tool to easily create and use the content of a database by coding schemas. NextJS is also great given its ability to handle static site generationa or server side rendering",
            imgUrl: travel,
            desktopVid: `<iframe className="videoYTDesktop" src="https://www.youtube.com/embed/ED-P-3xXIs8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            technologies: [javascripticon, nextjsicon, sanityicon, mapboxicon]
        },
        {
            title: "TypeScript hangman",
            description: "This is a hangman game made using TypeScript, React and Vite JS. This is a first project for me to learn about TS.",
            imgUrl: hangman,
            desktopVid: `<iframe className="videoYTDesktop" src="https://www.youtube.com/embed/qfZA2dnfhvw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            technologies: [typescripticon, reacticon, vitejsicon]
        },
        {
            title: "Meteo App with Vite",
            description: "This is simple meteo application done with Vite and using the API of OpenMeteo. I take the data from today's weather, the week and the hours which I sliced to only the next 24 hours, so it doesn't render a long page. The app requires that the visitor allow the geolocation, so it can give the weather following is longitude, lattitude and timezone. I also made the weather code render GIFS weather icons",
            imgUrl: weather,
            desktopVid: `<iframe className="videoYTDesktop" src="https://www.youtube.com/embed/XNd4FyEUg80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            technologies: [cssicon, javascripticon, vitejsicon]
        },
        {
            title: "Javascript quiz",
            description: "This is a little quiz to find your spiritual animal in 4 questions. I made it using simple JS. There are 16 possible answers.",
            imgUrl: tiger,
            desktopVid: `<iframe className="videoYTDesktop" src="https://www.youtube.com/embed/A2OCqGQISKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            technologies: [htmlicon, cssicon, javascripticon]
        },
        {
            title: "Sass animations",
            description: "I was in charge of creating a cool frontend using animations with Sass! Such as a loader when changing pages, a smooth fade-in of cards, a heart button that fills itself when clicking and a rotating check when selecting a dish.",
            imgUrl: citerouge,
            desktopVid: `<iframe className="videoYTDesktop" src="https://www.youtube.com/embed/2241zjH76bI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            technologies: [htmlicon, cssicon, sassicon]
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
                            <p>Below are coding projects I worked on and helped me learn.</p>
                        </div>}
                    </TrackVisibility>
                    <Container>
                        <Row>
                            {projects.map((project, index) => {
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
