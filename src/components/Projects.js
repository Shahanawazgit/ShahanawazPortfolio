import React from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import iNotebook from "../assets/img/iNotebook.png";
import NewsTime from "../assets/img/NewsTime.png";
import textUtils from "../assets/img/textUtils.png";
import Portfolio from "../assets/img/Portfolio.png";
import DigitalClock from "../assets/img/DigitalClock.png";
import DigitalMedia from "../assets/img/DigitalMedia.png";
import eCommerceWebApp from "../assets/img/eCommerceWebApp.png";
import passwordGenerator from "../assets/img/passwordGenerator.png";
import colorPicker from "../assets/img/colorPicker.png";
import psdToHtml from "../assets/img/psdToHtml.png";
import fitbit from "../assets/img/fitbit laptop.png";

const Projects = () => {
  const projectsReactBootstrap = [
    {
      title: "FitBit",
      description: "Completely responsive gym website developed using React",
      imgUrl: fitbit,
      link: "https://fitbit-shahanawazgit.vercel.app/",
    },
    {
      title: "My Portfolio",
      description:
        "The Portfolio website to show my details, skills & work developed using React and React-Bootstrap",
      imgUrl: Portfolio,
      link: "https://github.com/Shahanawazgit/iNotebook",
    },
    {
      title: "iNotebook",
      description: "MERN app for making notes",
      imgUrl: iNotebook,
      link: "https://github.com/Shahanawazgit/iNotebook",
    },
    {
      title: "NewsTime",
      description: "Stay updated with the world",
      imgUrl: NewsTime,
      link: "https://github.com/Shahanawazgit/NewsTime",
    },
    {
      title: "textUtils",
      description: "Text manipulating web app",
      imgUrl: textUtils,
      link: "https://github.com/Shahanawazgit/textUtils",
    },
  ];

  const projectsHtmlCssJs = [
    {
      title: "passwordGenerator",
      description: "passwordGenerator made by using HTML CSS and JS",
      imgUrl: passwordGenerator,
      link: "https://github.com/Shahanawazgit/iNotebook",
    },
    {
      title: "DigitalMedia",
      description:
        "DigitalMedia real world website made by using HTML CSS and JS",
      imgUrl: DigitalMedia,
      link: "https://github.com/Shahanawazgit/iNotebook",
    },
    {
      title: "eCommerceWebApp",
      description: "eCommerceWebApp made by using HTML CSS and JS",
      imgUrl: eCommerceWebApp,
      link: "https://github.com/Shahanawazgit/iNotebook",
    },
    {
      title: "colorPicker",
      description: "colorPicker made by using HTML CSS and JS",
      imgUrl: colorPicker,
      link: "https://github.com/Shahanawazgit/iNotebook",
    },
    {
      title: "DigitalClock",
      description: "Digital clock made by using HTML CSS and JS",
      imgUrl: DigitalClock,
      link: "https://github.com/Shahanawazgit/iNotebook",
    },
  ];

  const projectsHtmlCssBootstrapJs = [
    {
      title: "psdToHtml",
      description: "psdToHtml sample portfolio website",
      imgUrl: psdToHtml,
      link: "https://github.com/Shahanawazgit/iNotebook",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>These projects showcase my skills</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="mb-5">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <i className="fa-brands fa-react mx-2 fa-2x"></i>
                    <i className="fa-brands fa-bootstrap fa-2x"></i>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <i className="fa-brands fa-html5 fa-2x"></i>
                    <i className="fa-brands fa-css3-alt mx-2 fa-2x"></i>
                    <i className="fa-brands fa-square-js fa-2x"></i>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <i className="fa-brands fa-html5 fa-2x"></i>
                    <i className="fa-brands fa-css3-alt mx-2 fa-2x"></i>
                    <i className="fa-brands fa-bootstrap  fa-2x"></i>
                    <i className="fa-brands fa-square-js mx-2 fa-2x"></i>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projectsReactBootstrap.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projectsHtmlCssJs.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projectsHtmlCssBootstrapJs.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp2}
        alt="bg-img-right"
        className="background-image-right"
      />
    </section>
  );
};

export default Projects;
