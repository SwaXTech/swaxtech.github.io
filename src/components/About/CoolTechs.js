import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHaskell, DiRuby
} from "react-icons/di";
import {
  SiKotlin, SiScala
} from "react-icons/si";

function CoolTechs() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiScala />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRuby />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHaskell/>
      </Col>

    </Row>
  );
}

export default CoolTechs;
