import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/donation.png";
import bitsOfCode from "../../Assets/Projects/portfolio.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Bloggy"
              description="A Blog Website where user can signIn/signUp and see article and comment and upvote."
              ghLink="https://bloogyy.vercel.app/"
              demoLink="https://bloogyy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Rahul's PortFolio"
              description="This is Dynamic My portfolio Website USing ReactJS."
              ghLink="https://github.com/imRahul05/Rahul_portfolio"
              demoLink="https://imrahul05.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Community Care"
              description="A mobile application using the Flutter framework and Firebase for the Smart India Hackathon 2023project by AICTE. It allows users to post local issues such as sanitation and other municipal concernsdirectly to their local municipal corporation."
              ghLink="#"
              demoLink="https://communitycarev4.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Gift Of Hope"
              description="A Donation app using flutter Framework ,Dart and Firebase and Payment integration using Razorpay API."
              ghLink="https://github.com/imRahul05/Flutter_projects"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
