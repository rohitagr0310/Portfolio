import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCards from "./CertificateCards";
import Particle from "../Particle";
import ImageGallery from "./ImageGallery";

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
              {imageInfo.map(({ title, path }, index) => (
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
          )}
        </ImageGallery>
      </Container>
    </Container>
  );
}

export default Certificates;
