import React from 'react'

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-content">
        <div className="profile-div">
          <img className="profile" src="./myFace.jpg" alt="Cody's Headshot"/>
        </div>
        <div className="aboutText">
          <div>
            <h3>About Me</h3>
            <p>Hello, I’m Cody! I am a musician turned full-stack developer through Fullstack Academy, Chicago.  Currently I serve as a teaching fellow on campus, working with over 50 students learning full stack web development.</p>
            <p>After graduating from the University of Michigan in 2016, I spent a year in Nashville, TN creating music and exploring my interest in medicine. During this time I discovered programming and quickly fell in love with the intricacies of creatively solving technical problems.</p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skills-icons">
              <i className="devicon-css3-plain"></i>
              <i className="devicon-express-original"></i>
              <i className="devicon-github-plain"></i>
              <i className="devicon-git-plain"></i>
              <i className="devicon-html5-plain"></i>
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-mocha-plain"></i>
              <i className="devicon-nodejs-plain"></i>
              <i className="devicon-postgresql-plain"></i>
              <i className="devicon-react-original"></i>
              <i className="devicon-sequelize-plain"></i>
              <i className="devicon-visualstudio-plain"></i>
              <i className="devicon-webpack-plain"></i>
            </div>
          </div>
          <div className="resume">
            <a
            href="https://drive.google.com/file/d/1A5SrsU6XaGurelpLiIJWyOWllonT__7s/view?usp=sharing"
            className="waves-effect btn blue lighten-2"
            target="_blank"
            rel="noopener noreferrer"
            >Resume</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
