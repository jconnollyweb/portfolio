import React from 'react';
import { Link } from 'react-router-dom';

function MyCv() {
  return (
    <div 
      className="cv-container" 
      style={{
        height: "100vh", 
        width: "1200px",
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        padding: "20px"
      }}
    >
      <div className="back" style={{ marginBottom: "20px" }}>
        <h4>
          <Link 
            to="/" 
            style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}
          >
            Back to Portfolio
          </Link>
        </h4>
      </div>
      <iframe 
        src="https://1drv.ms/w/c/7bffc89783e92f2e/IQO6NDl12f4lRI1QyA_KxPfOAV9tKCXFI58pgJT-lYg5Z2o?em=2" 
        width="80%" 
        height="80%" 
        frameBorder="0"
        style={{ border: "2px solid white", borderRadius: "8px" }}
      >
        This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> document, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.
      </iframe>
    </div>
  );
}

export default MyCv;
