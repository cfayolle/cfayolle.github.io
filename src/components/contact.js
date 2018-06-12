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
          <i class="fas fa-envelope icon"></i>
        </a>
        <a
          title="Github"
          href="https://github.com/cfayolle"
          target="_blank"
          rel="noopener noreferrer">
          <i class="fab fa-github icon"></i>
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/codyfayolle/"
          target="_blank"
          rel="noopener noreferrer">
          <i class="fab fa-linkedin-in icon"></i>
        </a>
      </div>
    </div>
  )
}

export default Contact
