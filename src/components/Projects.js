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
      description:
        "FitBit is a state-of-the-art gym website, meticulously crafted with React.js and Bootstrap, reflects our commitment to providing you with the best fitness experience possible. Completely responsive for different screen sizes.",
      imgUrl: fitbit,
      gitHubRepo: "https://github.com/Shahanawazgit/fitbit",
      liveLink: "https://fitbit-nine.vercel.app/",
    },
    {
      title: "Shahanawaz's Portfolio",
      description:
        "Welcome to my portfolio website, a digital playground where creativity meets code! I am a passionate frontend developer, and this is where I showcase my skills, projects, and journey through the ever-evolving world of web development. Join me on this visual and interactive journey through the websites and applications I've crafted with care.",
      imgUrl: Portfolio,
      gitHubRepo: "https://github.com/Shahanawazgit/ShahanawazPortfolio",
      liveLink: "https://shahanawaz-portfolio.vercel.app/",
    },
    {
      title: "iNotebook",
      description:
        "iNotebook is a sleek and user-friendly React-based web application designed to simplify and enhance your note-taking experience. Whether you're a student, professional, or just someone who loves to stay organized, iNotebook offers a versatile platform for capturing, managing, and organizing your thoughts, ideas, and important information.",
      imgUrl: iNotebook,
      gitHubRepo: "https://github.com/Shahanawazgit/iNotebook",
      liveLink: "https://i-notebook-topaz.vercel.app/",
    },
    {
      title: "NewsTime",
      description:
        "Welcome to NewsTime, your one-stop destination for staying informed about the latest news and current events. Powered by the cutting-edge technology of React.js and the expansive capabilities of the NewsAPI, I have created a dynamic and user-friendly news web application that puts the world's headlines at your fingertips.",
      imgUrl: NewsTime,
      gitHubRepo: "https://github.com/Shahanawazgit/NewsTime",
      liveLink: "https://github.com/Shahanawazgit/NewsTime",
    },
    {
      title: "TextUtils",
      description:
        "TextUtils is the go-to web application for all your text manipulation needs, meticulously crafted with React.js to provide you with a seamless and powerful experience. Whether you're a writer, coder, marketer, or simply someone who wants to manipulate a text, TextUtils has got you covered.",
      imgUrl: textUtils,
      gitHubRepo: "https://github.com/Shahanawazgit/TextUtils",
      liveLink: "https://text-utils-blue.vercel.app/",
    },
  ];

  const projectsHtmlCssJs = [
    {
      title: "Password Generator",
      description:
        "Password Generator - the ultimate solution to ensure your online security. In today's digital age, safeguarding your personal information has never been more critical. My Password Generator Web App empowers you to create robust, complex, and virtually unhackable passwords effortlessly.",
      imgUrl: passwordGenerator,
      gitHubRepo: "",
      liveLink: "",
    },
    {
      title: "Digital Media",
      description:
        "Digital Media - our Digital Marketing Agency, we understand the importance of staying at the forefront of the digital landscape. With our website as a prime example, we combine HTML's robust structure, CSS's elegant styling, and JavaScript's interactivity to deliver a digital experience that mirrors the innovative solutions we provide to our clients.",
      imgUrl: DigitalMedia,
      gitHubRepo: "https://github.com/Shahanawazgit/DigitalMedia",
      liveLink: "https://shahanawazgit.github.io/DigitalMedia/",
    },
    {
      title: "eCommerceWebApp",
      description: "eCommerceWebApp made by using HTML CSS and JS",
      imgUrl: eCommerceWebApp,
      gitHubRepo: "",
      liveLink: "https://github.com/Shahanawazgit/",
    },
    {
      title: "colorPicker",
      description: "colorPicker made by using HTML CSS and JS",
      imgUrl: colorPicker,
      gitHubRepo: "",
      liveLink: "https://github.com/Shahanawazgit/",
    },
    {
      title: "DigitalClock",
      description: "Digital clock made by using HTML CSS and JS",
      imgUrl: DigitalClock,
      gitHubRepo: "",
      liveLink: "https://github.com/Shahanawazgit/",
    },
  ];

  const projectsHtmlCssBootstrapJs = [
    {
      title: "psdToHtml",
      description: "psdToHtml sample portfolio website",
      imgUrl: psdToHtml,
      gitHubRepo: "",
      liveLink: "https://github.com/Shahanawazgit/",
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
