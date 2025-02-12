import React, { useEffect, useState } from "react";
import "./HomePage.css";
import projectsData from "../../data/projects.json";
import workData from "../../data/work.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function HomePage() {
  const [projects, setProjects] = useState([]);
  const [work, setWork] = useState([]);
  const [activeSection, setActiveSection] = useState("about");
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    let cursor = document.querySelector(".custom-cursor");

    const handleMouseMove = (e) => {
      if (!cursor) return; // Prevent the error if cursor is not yet rendered
      setCursorPosition({
        top: e.clientY - cursor.offsetHeight / 2,
        left: e.clientX - cursor.offsetWidth / 2,
      });
    };

    const handleMouseEnter = () => setCursorActive(true);
    const handleMouseLeave = () => setCursorActive(false);

    window.addEventListener("mousemove", handleMouseMove);

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  

  useEffect(() => {
    setProjects(projectsData);
    setWork(workData);

    const sections = document.querySelectorAll("section");
    let currentSection = "";
  
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (visibleSections.length > 0) {
          // Sort sections by vertical position
          visibleSections.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          
          const topSection = visibleSections[0].target.id;
          if (currentSection !== topSection) {
            currentSection = topSection;
            setActiveSection(topSection);
          }
        }
      },
      { threshold: 0.3 } 
    );
  
    sections.forEach((section) => observer.observe(section));
  
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (e, section) => {
    e.preventDefault(); // Prevent the default jump
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };
  

  
  return (
    <>
      <div
        className={`custom-cursor ${cursorActive ? "active" : ""}`}
        style={{
          top: `${cursorPosition.top}px`,
          left: `${cursorPosition.left}px`,
        }}
      ></div>
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="name">John Connolly</h1>
        <p className="summary">
         <b> Frontend developer</b> with experience in building modern, responsive, and user-friendly web applications
          using React, WordPress, and Power Platform.
        </p>
        <nav className="nav">
  <a
    href="#about"
    onClick={(e) => handleNavClick(e, 'about')}
    className={activeSection === 'about' ? 'active' : ''}
  >
    About
  </a>
  <a
    href="#projects"
    onClick={(e) => handleNavClick(e, 'projects')}
    className={activeSection === 'projects' ? 'active' : ''}
  >
    Projects
  </a>
  <a
    href="#work"
    onClick={(e) => handleNavClick(e, 'work')}
    className={activeSection === 'work' ? 'active' : ''}
  >
    Experience
  </a>
</nav>


        <div className="social-icons">
            <a href="https://www.linkedin.com/in/john-connolly-web/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
            <a href="https://github.com/jconnollyweb" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
            <Link to="/contact">
              <FontAwesomeIcon icon={faPhone} className="social-icon" />
            </Link>
            <a href="mailto:johnc1983@hotmail.co.uk">
              <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
            </a>
          </div>
      </aside>

      {/* Main Content */}
      <main className="content">
        <div id="about">
          <section id="about" className="about-section">
            <h2>About</h2>
            <p>Hello and thank you for taking the time to check out my portfolio. I am excited to find the perfect position for someone like me, who is eager to continue my professional growth in the industry. I have recently completed my level 4 apprenticeship in Software Engineering with a merit and I am eager to leverage my skills and passion for software development.
          During my apprenticeship I had the opportunity to work on a range of projects that honed my proficiency in frontend technologies, languages and frameworks like React, JavaScript and Angular.
          I also built a full stack application with a React frontend as part of my final project. My experience includes creating responsive and user friendly interfaces.</p> <p>Working with different libraries like AG-Grid and High Charts and different testing libraries and methodologies.
          I have also gained experience in working in cross functional teams and working in an agile environment.
          
          Whilst I believe my specialism is in frontend development I have also gained experience working on DevOps projects for which I have gained an insight and understanding of the benefits of continuous collaboration between development and operations teams.
          Before my apprenticeship I was a pastry chef for many years and it was not until the Covid 19 pandemic that I decided to change careers. I was a self-taught developer working on static websites and a volunteer project to gain industry experience.</p> <p>
          
          I am self-motivated and determined to succeed and develop my capabilities to the highest possible standard. I am proficient in HTML, CSS, JavaScript and React and I have had exposure to other frameworks such as Next.js and Angular. I have a solid understanding of software development best practices and design principles. I have experience in version control systems, continuous integration and deployment pipelines. I am enthusiastic about the opportunity to work somewhere where I can contribute my current skills and, more importantly, thrive in a supportive atmosphere that encourages continuous learning and professional growth. I am eager to embrace the challenges and opportunities that come next as I continue to develop into a more polished professional.
               </p>
          </section>
        </div>

        <section id="projects" className="projects-section">
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={require(`../../images/${project.image}`)}
                  alt={project.title}
                  className="project-image"
                />
                <div className="card-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="skills">
                    {project.skills.map((skill, idx) => (
                      <span className="skill-bubble" key={idx}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </section>

        <section id="work" className="work-history">
          <h2>Experience</h2>
          {work.map((work, index) => (
            <div className="work-card" key={index}>
              <div className="work-date">
                <h3>{work.date}</h3>
              </div>
              <div className="work-info">
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <div className="work-skills">
                  {work.skills.map((skill, idx) => (
                    <span className="skill-bubble" key={idx}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <h4>
            <Link to="/cv">Look at my full CV</Link>
          </h4>
        </section>
      </main>
    </div>
    </>
  );
}

export default HomePage;
