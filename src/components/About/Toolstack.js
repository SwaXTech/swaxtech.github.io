import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAndroidstudio, SiDocker, SiGithubactions, SiJetbrains, SiLinux,
  SiVisualstudiocode
} from "react-icons/si";
import { Tech } from "./utils";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Tech name="Linux">
        <SiLinux />
      </Tech>
      <Tech name="Visual Studio Code">
        <SiVisualstudiocode />
      </Tech>
      <Tech name="JetBrains">
        <SiJetbrains />
      </Tech>
      <Tech name="Github Actions">
        <SiGithubactions />
      </Tech>
      <Tech name="Docker">
        <SiDocker />
      </Tech>
      <Tech name="Android Studio">
        <SiAndroidstudio />
      </Tech>
    </Row>
  );
}

export default Toolstack;
