import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";  

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
             Hello! I'm  <span className="purple"> Cherish Patel </span>
             a dedicated and passionate Computer Engineering student currently in my 7th semester.
             With a strong focus on web development, I specialize in the
             <span className="purple"> MERN stack (MongoDB, Express.js, React, Node.js) </span>
             crafting dynamic and responsive web applications.
            <br /><br />
            Throughout my academic journey, I have immersed myself in various programming languages and technologies, continually expanding my skill set.
            <br />
            I thrive on creating innovative projects that solve real-world problems, and I am always eager to learn and explore new trends in the tech industry.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Adventurer and Trekking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
