import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCards from "./CertificateCards";
import Particle from "../Particle";
import ImageGallery from "./ImageGallery";
import Accordion from 'react-bootstrap/Accordion';
import "./style.css";

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>Here are my Certificates</p>
        <ImageGallery>
          {(imageInfo) => (
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Accordion style={{ backgroundColor: "transparent", paddingBottom: "10px" }} defaultActiveKey="0">
                {Object.entries(imageInfo).map((key, index) => (
                  <Accordion.Item style={{ backgroundColor: "transparent", paddingBottom: "10px" }} eventKey={index}>
                    <Accordion.Header style={{ justifyContent: "center", paddingBottom: "10px" }}>{key[0]}</Accordion.Header>
                    <Accordion.Body>
                      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        {key[1].map(({ title, path }, index) => (
                          <Col md={4} className="project-card" key={index}>
                            <CertificateCards
                              imgPath={path}
                              isBlog={false}
                              title={title}
                              description=""
                            />
                          </Col>
                        ))}
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Row>
          )}
        </ImageGallery>
      </Container>
    </Container >
  );
}

export default Certificates;
