import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rohit Agarwal </span>
            from <span className="purple"> Udaipur, India.</span>
            <br />
            I am currently Studing Computer Science and Engineering at Techno India NJR
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things not for your gain, But for the gain for the masses"{" "}
          </p>
          <footer className="blockquote-footer">Rohit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
