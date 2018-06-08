import React from 'react'

const Projects = () => {
  return (
    <div className="projects">
      <div>
        <h2 className="projectTitle">Projects</h2>
      </div>
      <div className="row projects-row">
        <div className="col s4 project-mod">
          <a href="https://ccadd-topshop.herokuapp.com/">
            <img className="project-img" src="topshop.png" alt="topshop"/>
          </a>
          <h4>TopShop</h4>
        </div>
        <div className="col s4 project-mod">
          <a href="https://jam-sockets.herokuapp.com/">
            <img className="project-img" src="jam.session.png" alt="jam.session"/>
          </a>
          <h4>Jam.Session</h4>
        </div>
        <div className="col s4 project-mod">
          <a href="http://www.dwellplayd.com/">
            <img className="project-img" src="dwellplayd.png" alt="jam.session"/>
          </a>
          <h4>dwellplayd</h4>
        </div>
      </div>
    </div>
  )
}

export default Projects
