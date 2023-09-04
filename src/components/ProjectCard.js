import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col sm={12} md={6} lg={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="proj-img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "#fff", fontSize: "25px" }}
          >
            <i className="fa-solid fa-paper-plane"></i>
          </a>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
