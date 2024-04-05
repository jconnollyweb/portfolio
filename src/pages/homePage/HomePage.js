import { Link } from "react-router-dom"
import oppImage from "../../images/cred-logo.png"
import carImage from "../../images/cars.png"
import furnImage from "../../images/furniture.png"
import "./HomePage.css"

import { useState } from "react";
import "./HomePage.css";

function HomePage() {
  const projects = [
    {
      title: "Opportunities App",
      description: "Static version of the final project of my apprenticeship...",
      image: oppImage,
      link: "https://opportunities-4.onrender.com/"
    },
    {
      title: "Classic Cars Responsive",
      description: "Lorem ipsum dolor sit amet, consectetur adipisci elit...",
      image: carImage,
      link: "https://jconnollyweb.github.io/classic-responsive/"
    },
    {
      title: "Furniture Store Responsive",
      description: "Lorem ipsum dolor sit amet, consectetur adipisci elit...",
      image: furnImage,
      link: "https://jconnollyweb.github.io/Maynooth-Furniture/"
    }
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div className="home-page">
      <div className="slider">
        <button className="arrow" onClick={prevProject}>&lt;</button>
        <div className="project">
        <a href={projects[currentProject].link} target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={projects[currentProject].image} alt={projects[currentProject].title} />
          <div className="project-details">
            <h2>{projects[currentProject].title}</h2>
            <p>{projects[currentProject].description}</p>
          </div>
          </a>
        </div>
        <button className="arrow" onClick={nextProject}>&gt;</button>
      </div>
    </div>
  );
}

export default HomePage;


