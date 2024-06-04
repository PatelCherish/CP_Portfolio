import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


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
              // imgPath={chatify}
              // isBlog={false}
              title="Snake-Game"
              description="I developed a classic Snake game using JavaScript, HTML, and CSS. This project showcases my ability to create interactive and engaging web applications. In the game, the player controls a snake to eat food, which makes the snake grow longer. The objective is to avoid collisions with the walls and the snake's own body. This project helped me enhance my skills in JavaScript, including game logic implementation and handling user input."
              ghLink="https://github.com/PatelCherish/Snake-Game-JS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="Keeper Notes"
              description="I developed Keeper Notes using React.js, a dynamic web application for managing personal notes. This project allows users to create, edit, and delete notes in a simple and intuitive interface. Through this project, I enhanced my skills in React.js, including state management, component-based architecture, and responsive design. Keeper Notes demonstrates my ability to build functional and user-friendly applications with modern web technologies."
              ghLink="https://github.com/PatelCherish/KeeperNotes"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="To-Do-List"
              description="I developed a To-Do List application using React.js, designed to help users manage their tasks efficiently. This project features functionalities such as adding, editing, and deleting tasks, as well as marking tasks as completed. Through this project, I honed my skills in React.js, including state management, component-based architecture, and event handling. The To-Do List application exemplifies my ability to create practical and user-friendly web applications with modern JavaScript frameworks."
              ghLink="https://github.com/PatelCherish/To-Do-List"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="Weather Application"
              description="I developed a Weather Application using React.js, designed to provide users with real-time weather updates. This project features a clean and intuitive interface where users can search for current weather conditions in various locations. By integrating with a weather API, the application displays detailed information including temperature, humidity, and weather forecasts. This project enhanced my skills in React.js, API integration, and responsive design. The Weather Application demonstrates my ability to build dynamic and interactive web applications with real-time data fetching.              "
              ghLink="https://github.com/PatelCherish/Weather-Application/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide}
              // isBlog={false}
              title="JobZee"
              description="I developed JobZee, a comprehensive job portal using the MERN stack (MongoDB, Express.js, React, Node.js). The platform features two main modules: Employers and Freshers. Employers can post job listings, while Freshers can apply for jobs based on their skills and interests. This project involved building a robust backend to handle job postings, user authentication, and application submissions, as well as a dynamic frontend for a seamless user experience. Through JobZee, I enhanced my skills in full-stack development, database management, and API integration. This project showcases my ability to create scalable and user-friendly web applications tailored to real-world needs."
              ghLink="https://github.com/PatelCherish/Jobzee"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
