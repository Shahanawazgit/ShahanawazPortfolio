import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <h2>Skills</h2>
                    <p>These are my Technical Skills</p>
                  </div>
                )}
              </TrackVisibility>
              <Carousel responsive={responsive} infinite={true} autoPlay={true} className="skill-slider">
                <div className="item">
                  <img src={meter3} alt="meter-svg" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="meter-svg" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="meter-svg" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="meter-svg" />
                  <h5>Next.js</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="meter-svg" />
                  <h5>Tailwind</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="meter-svg" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="meter-svg" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="meter-svg" />
                  <h5>Git & Github</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="bg-img-left" className="background-image-left" />
    </section>
  );
};

export default Skills;
