import React from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import {
  projectsReactBootstrap,
  projectsHtmlCssJs,
  projectsHtmlCssBootstrapJs,
} from "../data/Data";

const Projects = () => {
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
