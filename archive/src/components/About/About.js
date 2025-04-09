import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import laptopimg2 from "../../Assets/about2.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopimg2} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              My <strong className="purple">Education</strong>
            </h1>
            <Card
              style={{
                marginBottom: "20px",
                background: "transparent",
                borderBlockColor: "purple",
                borderBlockWidth: 5,
                borderRadius: 45,
              }}
            >
              <Card.Body>
                <Card.Title>
                  <strong>Bachelor of Technology (B.Tech)</strong>
                </Card.Title>
                <Card.Text>Techno India NJR Institute of Technology</Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                background: "transparent",
                borderBlockColor: "purple",
                borderBlockWidth: 5,
                borderRadius: 45,
              }}
            >
              <Card.Body>
                <Card.Title>
                  <strong>12th Grade</strong>
                </Card.Title>
                <Card.Text>Central Public School</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
