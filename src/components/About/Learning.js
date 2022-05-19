import React from "react";
import { Row } from "react-bootstrap";
import { DiMongodb } from "react-icons/di";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { Tech } from "./utils";

function Learning() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Tech name="Typescript">
        <SiTypescript />
      </Tech>
      <Tech name="Next.js">
        <SiNextdotjs />
      </Tech>
      <Tech name="MongoDB">
        <DiMongodb />
      </Tech>

    </Row>
  );
}

export default Learning;
