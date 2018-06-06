import React from 'react'

const About = () => {
  return (
    <div className="about">
      <div className="row">
        <div className="col s4">
          <img className="responsive-img profile" src="./myFace.jpg" alt="Cody's Headshot"/>
        </div>
        <div className="col s8 aboutText">
          <div>
            <h3>About Me</h3>
            <p>After completing college, I spent a year in Nashville working as a research assistant and composing/producing music during my free time. As my interest in medicine began to decline, I stumbled upon programming and quickly fell in love with the intricacies of creatively solving technical problems.</p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
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
          <div className="resume">
            <button className="waves-effect btn blue lighten-2">Resume</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
