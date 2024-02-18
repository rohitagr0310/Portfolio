import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCards from "./CertificateCards";
import Particle from "../Particle";
import Bookflow from "../../Assets/Projects/Bookflow.png";

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>Here are my Certificates</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificateCards
              imgPath={Bookflow}
              isBlog={false}
              title="Bookflow"
              description="A library Management App built upon react.js and uses netlify as hosting platform. i used mysql as database which is hosted on planetscale and many serverless functions such as lamda function for the entre backend. I started it with few of my friends and eventually took it to hackotberfes level"
              linkedInLink="https://github.com/rohitagr0310/Bookflow-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
