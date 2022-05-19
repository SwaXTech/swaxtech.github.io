import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiAndroid, DiGit,
  DiJava, DiJavascript1, DiMongodb, DiNodejs, DiPython, DiReact
} from "react-icons/di";
import {
  SiExpress, SiGithub,
  SiGitlab, SiGnubash, SiGooglecloud,
  SiMysql
} from "react-icons/si";
import { Tech } from "./utils";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Tech name="C++">
        <CgCPlusPlus />
      </Tech>
      <Tech name="JavaScript">
        <DiJavascript1 />
      </Tech>
      <Tech name="NodeJS">
        <DiNodejs />
      </Tech>
      <Tech name="React">
        <DiReact />
      </Tech>
      <Tech name="MongoDB">
        <DiMongodb />
      </Tech>
      <Tech name="Express JS">
        <SiExpress />
      </Tech>
      <Tech name="Git">
        <DiGit />
      </Tech>
      <Tech name="Google Cloud">
        <SiGooglecloud />
      </Tech>
      <Tech name="Python">
        <DiPython />
      </Tech>
      <Tech name="MySQL">
        <SiMysql />
      </Tech>
      <Tech name="Java">
        <DiJava />
      </Tech>
      <Tech name="Android">
        <DiAndroid />
      </Tech>
      <Tech name="Bash">
        <SiGnubash/>
      </Tech>
      <Tech name="Github">
        <SiGithub/>
      </Tech>
      <Tech name="Gitlab">
        <SiGitlab/>
      </Tech>
    </Row>
  );
}

export default Techstack;
