import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, gitHubRepo, liveLink }) => {
  return (
    <Col sm={12} md={12} lg={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="proj-img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          <div>
            <a
              href={gitHubRepo}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "25px",
              }}
            >
              <button className="btn btn-primary mx-2">
                <i className="fa-brands fa-github"></i> Repo
              </button>
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "25px",
              }}
            >
              <button className="btn btn-success mx-2">
                Live{" "}
                <i class="fa-solid fa-arrow-up-right-from-square fa-bounce"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
