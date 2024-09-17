
import { Link } from "react-router-dom"
import oppImage from "../../images/cred-logo.png"
import carImage from "../../images/cars.png"
import furnImage from "../../images/furniture.png"
import codeImage from "../../images/jccode.png"
import yorkImage from "../../images/york.png"
import presImage from "../../images/presentation.png"
import medalImage from "../../images/medals.png"
import movieImage from "../../images/movies.png"
import "./HomePage.css"
import { useState } from "react";
import "./HomePage.css";

function HomePage() {
  const projects = [
    {
      title: "WordPress Custom Theme- Movie Site",
      description: "Following on from my previous Wordpress Project I have built a small Movie Website theme to build on my knowledge of custom themes and post types. Again it was built  using PHP, HTML, CSS and JavaScript.  ",
      image: movieImage,
      link: "http://port-projects.42web.io/"
    },
    {
      title: "Doncaster Light Infantry Museum Interactive Display",
      description: "An interactive display I built as a freelance project for the Doncaster King's Own Light Infantry Museum. This was a custom built WordPress theme. So people could find out more information about the medals being displayed. It was built using PHP, HTML, CSS and JavaScript.  ",
      image: medalImage,
      link: "https://bdldev.co.uk/doncaster/av01/"
    },
    {
      title: "Opportunities App",
      description: "A new version of my Apprenticeship final project. A full stack App built using React, Express and PostresSQl. This was dockerized but is now being hosted on render.com. I created this as a tool for engineers in the company to see what client opportunities where coming up in the pipeline. The user can see all upcoming roles and fiter them by their skillset and grade. There is also an admin section for adding and editing roles.",
      image: oppImage,
      link: "https://opportunities-4.onrender.com/"
    },
    {
      title: "York People First",
      description: "This is a custom built WordPress theme I built as a volunteer project for a non profit organisation. It was built using HTML,CSS, JavaScript and PHP. This was my first client project before my Apprenticeship.",
      image: yorkImage,
      link: "https://yorkpeoplefirst.co.uk/"
    },
    {
      title: "Presentation",
      description: "This static site was created as I had to do a presentation for a job interview when I was trying to get into the industry and I decided to do that in the form of a web page. Mainly built with HTML and CSS with some JavaScript models and an image slider",
      image: presImage,
      link: "https://jconnollyweb.github.io/presentation/"
    },
    {
      title: "Classic Cars Responsive",
      description: "This is a static site I built whilst learning about responsive programming. It is mainly built with HTML and CSS and also an image slider built with JavaScript. It is fully responsive and can be used on all devices.  ",
      image: carImage,
      link: "https://jconnollyweb.github.io/classic-responsive/"
    },
    {
      title: "Furniture Store Responsive",
      description: "This is another static site I built in my early days of coding as I was teaching myself the basics of frontend. This is entirely made with just HTML and CSS. It is fully responsive",
      image: furnImage,
      link: "https://jconnollyweb.github.io/Maynooth-Furniture/"
    },
    {
      title: "JC Coding",
      description: "This is another static site I created. I built this when I was learning how to build custom themes for WordPress and this was the frontend I designed for the theme. You can see small similarities in the York People First site that I carried over. It is built with HTML,CSS and some JavaScript",
      image: codeImage,
      link: "https://jconnollyweb.github.io/JC-Coding//"
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
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="img-title">
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />
              <h2>{project.title}</h2>
            </div>
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </a>
        </div>
            ))}
            </div>
          </div>
  );
}

export default HomePage;


