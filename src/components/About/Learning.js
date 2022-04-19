import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiMongodb } from "react-icons/di";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

function Learning() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

    </Row>
  );
}

export default Learning;
