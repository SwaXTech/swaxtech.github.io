import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import delibird from "../../Assets/Projects/delibird.webp";
import nlp from "../../Assets/Projects/nlp.webp";
import rdp from "../../Assets/Projects/rdp.png";
import tadp from "../../Assets/Projects/scala.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rdp}
              isBlog={false}
              title="Rescate de Patitas"
              description="Rescate de patitas is an academic web project. You can register your pet and we will send you a QR Code to put in pet's collar. In case the pet is lost, the rescuer can contact you through our website by scanning the QR Code. This project was made using Java, Spark, Hibernate/JPA, MariaDB and Docker, following the main aspects of Object Oriented Programming and using various Desing Patterns, testing and deployed on an AWS instance."
              link="https://github.com/SwaXTech/RescateDePatitas"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tadp}
              isBlog={false}
              title="Técnicas Avanzadas de Programación"
              description="In the TADP project I learned how to solve the most typical inheritance problems with the use of Mixins and Traits, as well as I learned how to use Metaprogramming, in this case, to implement an aspect-oriented programming framework. I also learned how to mix the object paradigm with the functional paradigm and other cool things like monads and variance. We used metaprogramming to simulate an Aspect Oriented Paradigm framework on Ruby, and simulated a game of dungeons with doors that should be opened by different types of characters in Scala."
              link="https://github.com/SwaXTech/TecnicasAvanzadasDeProgramacion"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={delibird}
              isBlog={false}
              title="Delibird"
              description="Delibird is an Operating Systems project, in which we learned how to make a shared library, create a communication protocol, manage memory to avoid memory leaks, create a cache using Ram Memory concepts such as Dynamic/Fixed Partitioning and Buddy System, as well as memory compaction and the concepts of internal and external fragmentation. On the other hand, thread synchronization is implemented using schedulers such as SJF, Round Robin and FIFO, and finally an implementation of a File System to be able to persist data."
              link="https://github.com/SwaXTech/Delibird-Sistemas-Operativos"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nlp}
              isBlog={false}
              title="Detector de Plagio"
              description="This is a plagiarism detector, in which I learned how to classify texts according to the topic, as well as how to identify those proper names that could potentially be the author of the work. I also learned how to preprocess texts and finally how to compare paragraphs and sentences to obtain their semantic closeness and detect possible plagiarism."
              link="https://github.com/SwaXTech/Detector-de-Plagio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
