import React from 'react'

const Projects = () => {
  return (
    <div className="projects">
      <div>
        <h2 className="projectTitle">Projects</h2>
      </div>
      <div className="row projects-row">
        <div className="col s4 project-mod">
          <div className="card">
            <div className="card-image">
              <img src="topshop.png" alt="topshop"/>
            </div>
          </div>
          <h4>TopShop</h4>
        </div>
        <div className="col s4 project-mod">
          <div className="card">
            <div className="card-image">
              <img src="jam.session.png" alt="jam.session"/>
            </div>
          </div>
          <h4>Jam.Session</h4>
        </div>
        <div className="col s4 project-mod">
          <div className="card">
            <div className="card-image">
              <img src="dwellplayd.png" alt="jam.session"/>
            </div>
          </div>
          <h4>dwellplayd</h4>
        </div>
      </div>
    </div>
  )
}

export default Projects
