import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

const About = () => {
  const one = (
    <p>
      I am currently a <b>Bsc IT Student</b> at
      <a href="https://www.nmcollege.in/"> Narsee Monjee College</a>. I am passionate about web developement, 
      cyber security, Artificial Intelligence and building modern and interactive web apps.
      Previously, I completed a Cyber Security Internship where I gained hands-on experience with security operations, 
      incident monitoring, and real-world cybersecurity practices.
    </p>
  );
  const two = (
    <p>
      In my free time, I’m nerdy about tech gadgets, love literary fiction, and
      play way too many battle royale games. 
    </p>
  );

  const techStack = [
    "Python",
    "React.js",
    "Java",
    "HTML/CSS",
    "Javascript",
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {one}
            {"Here are some Programming Languages I have been working with:"}
            <ul className="tech-stack">
              {techStack.map((techItem, i) => (
                <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                  <li>{techItem}</li>
                </FadeInSection>
              ))}
            </ul>
            {two}
          </div>
          <div className="about-image">
            <img alt="Ryan Lewis" src={"/assets/me2.jpg"} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
