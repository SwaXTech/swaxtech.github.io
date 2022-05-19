import React from "react";
import { Row } from "react-bootstrap";
import { DiHaskell, DiRuby } from "react-icons/di";
import { SiKotlin, SiScala } from "react-icons/si";
import { Tech } from "./utils";

function CoolTechs() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Tech name="Scala">
        <SiScala />
      </Tech>
      <Tech name="Kotlin">
        <SiKotlin />
      </Tech>
      <Tech name="Ruby">
        <DiRuby />
      </Tech>
      <Tech name="Haskell">
        <DiHaskell />
      </Tech>
    </Row>
  );
}

export default CoolTechs;
