import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-text">
            Hi Everyone, I am <span className="purple">Shalabh Sonal </span>
            from <span className="purple"> Jharkhand, India.</span>
            <br />
            I am currently employed as a software developer at Delhivery.
            <br />
            I have completed Engineering at <b>Indian Institute of Information Technology, Allahabad.</b>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading History and Behavioural Economics
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket and Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Netflix and Anime
            </li>
          </ul>

          <p style={{ color: "rgb(3, 252, 177)" }}>
            "If you don't know how to do, know where to find!"{" "}
          </p>
          <footer className="blockquote-footer">Shalabh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;