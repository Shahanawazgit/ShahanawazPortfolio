import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import linkedin from "../assets/img/linkedin.svg";
import gitHub from "../assets/img/gitHub.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <div className="contact-info">
              <a href="mailto: shahanawaz2299@gmail.com">
                <i className="fa-solid fa-envelope"></i>{" "}
                shahanawaz2299@gmail.com
              </a>
              <p>
                <i className="fa-solid fa-phone"></i> +91 9545263991
              </p>
            </div>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/shahanawaz-pathan/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a
                href="https://github.com/Shahanawazgit"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gitHub} alt="GitHub" />
              </a>
            </div>
            <p>CopyRight &copy; 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
