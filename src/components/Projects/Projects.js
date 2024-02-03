import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ARbarzaar from "../../Assets/Projects/ARbarzaar.png";
import Bookflow from "../../Assets/Projects/Bookflow.png";
import Speedcatcher from "../../Assets/Projects/Speedcatcher.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bookflow}
              isBlog={false}
              title="Bookflow"
              description="A library Management App built upon react.js and uses netlify as hosting platform. i used mysql as database which is hosted on planetscale and many serverless functions such as lamda function for the entre backend. I started it with few of my friends and eventually took it to hackotberfes level"
              ghLink="https://github.com/rohitagr0310/Bookflow-app"
              demoLink="https://book-flow.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ARbarzaar}
              isBlog={false}
              title="ARbarzaar"
              description="It is a e-commerse website for books. I created this project as my learning experience from cs50 course and have use this project for that course. i built it on flas and html and css. i scraped the data from a website which allows biggeners to scrape the data"
              ghLink="https://github.com/rohitagr0310/ar_barzaar"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Speedcatcher}
              isBlog={false}
              title="Speedcatcher.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/rohitagr0310/Projects/tree/main/Speed%20Runner"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
