import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ResumePdf from "../assets/resume/Shahanawaz's Resume.pdf";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 100);

  const toRotate = ["Frontend Developer", "React Developer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1.5);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  id="left-b"
                  className={
                    isVisible ? "animate__animated animate__slideInLeft" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm Shahanawaz a `}
                    <br />
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    Dynamic frontend developer with extensive knowledge and
                    experience in HTML, CSS, JavaScript, Bootstrap, and React
                    JS. Demonstrated expertise in time-management, leadership,
                    and collaboration. Excels in creating visually appealing and
                    user-friendly websites and applications. Familiar with Git
                    and GitHub for effective collaboration and version control.
                    Passionate about creating visually appealing and responsive
                    websites. Seeking opportunities to further skills in web
                    development and contribute to organizational success.
                  </p>
                  <a
                    href={ResumePdf}
                    download="Shahanawaz's Resume-PDF-document"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>
                      Resume
                      <ArrowDownCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={5} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__delay-1s animate__slideInUp"
                      : ""
                  }
                >
                  <img src={headerImg} alt="Header img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
