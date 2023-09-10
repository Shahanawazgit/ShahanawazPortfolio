import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // setButtonText("Sending...");
  // let response = await fetch("http://localhost:5000/contact", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json;charset=utf-8",
  //   },
  //   body: JSON.stringify(formDetails),
  // });
  // setButtonText("Send");
  // let result = response.json();
  // setFormDetails(formInitialDetails);
  // if (result.code === 200) {
  //   setStatus({ success: true, message: "Message sent successfully" });
  // } else {
  //   setStatus({
  //     success: false,
  //     message: "Something went wrong, Please try again later!",
  //   });
  // }
  // };

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    let response = await emailjs.sendForm(
      "service_7lto4pg",
      "template_q5mmzdm",
      form.current,
      "TCFmEu_5yVOGKbU18"
    );

    setButtonText("Send");
    let result = response.status;
    setFormDetails(formInitialDetails);
    if (result === 200) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, Please try again later!",
      });
    }
    setTimeout(() => {
      setStatus({});
    }, 2000);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contactImg" />
          </Col>
          <Col md={6}>
            <h2 className="text-center">Get in Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="user_firstName"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    required
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    autoComplete="off"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="user_lastName"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    required
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    autoComplete="off"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    name="user_email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    required
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    autoComplete="off"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="number"
                    name="user_phone"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    required
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                    autoComplete="off"
                  />
                </Col>
                <Col>
                  <textarea
                    type="text"
                    name="user_message"
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    required
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    autoComplete="off"
                  />
                  <div className="text-center">
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </div>
                </Col>
                {status.message && (
                  <Col sm={12}>
                    <p className="mt-3 text-center">{status.message}</p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
