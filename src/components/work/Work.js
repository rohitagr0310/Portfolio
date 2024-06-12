import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkCards from "./WorkCards";
import Particle from "../Particle";
import bharatintern from "../../Assets/work/bharatintern.png";
import ibm from "../../Assets/work/ibm.png";
import mouktik from "../../Assets/work/mouktik.png";
import eisystem from "../../Assets/work/eisystem.png";

function Work() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Work Experience</strong>
        </h1>
        <p style={{ color: "white" }}>Here are my Work Experience</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <WorkCards
              imgPath={eisystem}
              isBlog={false}
              title="Data Science Intern - EISystems Services"
              description="Internship duration: 04/03/2024 - 29/04/2024, Udaipur, India. Data Science with Python. Learned about python and build 8 project of datascience with the final internship report."
              linkedInLink="https://www.linkedin.com/posts/rohitagarwal2610_rohit-agarwal-certificate-of-internship-activity-7196771744769052673-d47t?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <WorkCards
              imgPath={bharatintern}
              isBlog={false}
              title="Data Science Intern - Bharat Intern"
              description="Internship duration: 07/2023 - 08/2023, Remote. Stock Market Analysis, Titanic Classification Model. Skills Developed - Data preprocessing."
              linkedInLink="https://www.linkedin.com/posts/rohitagarwal2610_bharat-intern-data-science-rohit-agarwal-activity-7089819536740278272-GX7K?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <WorkCards
              imgPath={ibm}
              isBlog={false}
              title="Data Science Intern Team Lead - IBM SkillBuild"
              description="Internship duration: 06/2023 - 08/2023, Remote. Lung Cancer Analysis Project Team Lead - Lead Intern Team of 8 Interns. Skills Developed - Data Analytics and team management."
              linkedInLink="https://www.linkedin.com/posts/rohitagarwal2610_rohit-agarwal-ibm-data-analytics-internship-activity-7110900693288308736-2DQG?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <WorkCards
              imgPath={mouktik}
              isBlog={false}
              title="Data Science Intern - Mouktik Consulting Services"
              description="Internship duration: 01/2023 - 02/2023, Udaipur, India. Machine Learning, Data Visualization, Data Cleaning."
              linkedInLink="https://www.linkedin.com/posts/rohitagarwal2610_virtual-internship-of-machine-learning-activity-7023576742497857536-ODGT?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Work;
