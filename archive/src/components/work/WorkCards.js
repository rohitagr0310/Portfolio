import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";

function WorkCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {!props.isBlog && (
          <>
            <Button variant="primary" href={props.linkedInLink} target="_blank">
              <FaLinkedin /> &nbsp; LinkedIn
            </Button>
            {"\n"}
            {"\n"}
          </>
        )}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Website"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default WorkCards;
