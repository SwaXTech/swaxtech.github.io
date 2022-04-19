import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alexis Herasimiuk </span>
            from <span className="purple"> Buenos Aires, Argentina</span>
            <br />I am a junior developer and studying Information Systems
            Engineering at the UTN FRBA.
            <br />
            <br />
            Currently, I am working as a Full Stack Developer & Mobile Developer at{" "}
            <b>
              <a
                href="https://dblandit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="purple"
                style={{ textDecoration: "none" }}
              >
                {" "}
                DBLandIT
              </a>
            </b>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
