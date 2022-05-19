import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";

function MySelf() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming when I was 17 and since then I
              have never stopped learning 🚀.
              <br />
              <br />I work with
              <i>
                <b className="purple"> MERN Stack & Android Development </b>
              </i>
              , but I am currently learning Typescript, NextJs, and other cool
              technologies 😎.
              <br />
              <br />
              I work in the area of &nbsp;
              <i>
                <b className="purple">Web and Mobile App Development </b>, I
                love the field of &nbsp;
                <b className="purple">Artificial Intelligence</b>
              </i>, although I
                still don't know how to build them yet 😅.
              <br />
              <br />I also love linux, its customization and the automation of
              small repetitive tasks using technologies like &nbsp;
              <b className="purple">bash, docker</b> and &nbsp;
              <i>
                <b className="purple">python</b>
              </i>.
              <br /><br />
               In the future I would love to learn more about
              <i>
                <b className="purple"> cybersecurity</b>
              </i>{" "}
              🛡️ and
              <i>
                <b className="purple"> artificial intelligence</b> 
              </i> 🤖.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SwaXTech"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:aleeherasimiuk@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default MySelf;
