import React from 'react'

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h4>Contact</h4>
      </div>
      <div className="icons">
        <a
          title="Email"
          href="mailto:cfayolle@umich.edu"
          target="_blank"
          rel="noopener noreferrer">
          <img className="email-icon" alt="email-icon" src="email.png"/>
        </a>
        <a
          title="Github"
          href="https://github.com/cfayolle"
          target="_blank"
          rel="noopener noreferrer">
          <img className="contact-icon" alt="github-icon" src="github.png"/>
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/codyfayolle/"
          target="_blank"
          rel="noopener noreferrer">
          <img className="linked-icon" alt="linkedin-icon" src="linkedin.png"/>
        </a>
      </div>
    </div>
  )
}

export default Contact
