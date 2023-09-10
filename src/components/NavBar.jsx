import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.png";
import linkedin from "../assets/img/linkedin.svg";
import gitHub from "../assets/img/gitHub.svg";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

    // eslint-disable-next-line
  }, []);

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
    document.querySelector(".navbar-collapse").classList.toggle("show");
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/shahanawaz-pathan/"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  document
                    .querySelector(".navbar-collapse")
                    .classList.toggle("show");
                }}
              >
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a
                href="https://github.com/Shahanawazgit"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  document
                    .querySelector(".navbar-collapse")
                    .classList.toggle("show");
                }}
              >
                <img src={gitHub} alt="GitHub" />
              </a>
            </div>
            <button
              className="vvd"
              onClick={() => {
                window.location.href = "#connect";
                document
                  .querySelector(".navbar-collapse")
                  .classList.toggle("show");
              }}
            >
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
