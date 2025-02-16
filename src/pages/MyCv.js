import React from 'react';
import { Link } from 'react-router-dom';
import './MyCv.css'; // Import the CSS file

function MyCv() {
  return (
    <div className="cv-container">
      <div className="back">
        <h4>
          <Link to="/">Back to Portfolio</Link>
        </h4>
      </div>
      <iframe
        className="cv-iframe"
        src="https://1drv.ms/w/c/7bffc89783e92f2e/IQO6NDl12f4lRI1QyA_KxPfOAV9tKCXFI58pgJT-lYg5Z2o?em=2"
        frameBorder="0"
      >
        This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> document, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.
      </iframe>
    </div>
  );
}

export default MyCv;
