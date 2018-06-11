import React from 'react'

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div>
        <h2 className="projectTitle">Projects</h2>
      </div>
      <div className="row projects-row">
        <div className="col s4 project-mod">
          <a href="https://ccadd-topshop.herokuapp.com/">
            <img className="project-img" src="topshop.png" alt="topshop"/>
          </a>
          <div className="project-text">
            <h4>TopShop</h4>
            <p>An e-commerce platform designed to sell a variety of hats.</p>
          </div>
        </div>
        <div className="col s4 project-mod">
          <a href="https://jam-sockets.herokuapp.com/">
            <img className="project-img" src="jam.session.png" alt="jam.session"/>
          </a>
          <div className="project-text">
            <h4>Jam.Session</h4>
            <p>Jam.Session is a real-time collaborative music platform.</p>
          </div>
        </div>
        <div className="col s4 project-mod">
          <a href="http://www.dwellplayd.com/">
            <img className="project-img" src="dwellplayd.png" alt="jam.session"/>
          </a>
          <div className="project-text">
            <h4>dwellplayd</h4>
            <p>dwellplayd is a mobile app designed to turn communal tasks into an interactive game.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
