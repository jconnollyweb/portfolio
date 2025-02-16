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
        <h3 className="role">Frontend Devloper</h3>
        <p className="summary">
          I'm John. I enjoy building attractive, responsive and user-friendly websites.
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
            <p>Hello, and thank you for visiting my portfolio.
I am a dedicated and adaptable software developer with a passion for creating user-friendly, accessible, and visually appealing web applications. I recently completed my Level 4 Apprenticeship in Software Engineering with merit, during which I worked on a variety of projects that strengthened my expertise in frontend technologies, including React, JavaScript, and Angular.</p>  <p>I have also built full-stack applications using React and Angular for the frontend, giving me a well-rounded understanding of modern web development.
In addition to my frontend expertise, I have developed numerous custom WordPress themes, building my own post types and custom fields as well as creating custom WooCommerce sites, and built several Power Apps to streamline business processes. I also have experience working with data visualization libraries such as High charts and AG Grid, enhancing the usability of applications with complex data sets.
My experience extends beyond coding—I have worked in cross-functional Agile teams for large global companies, collaborating closely with designers, backend developers, and stakeholders to deliver high-quality solutions. I have also gained exposure to DevOps practices, CI/CD pipelines, and version control systems, which have given me a strong appreciation for the benefits of seamless collaboration between development and operations teams.</p> <p>
Before transitioning into software development, I worked as a pastry chef for several years. It was during the COVID-19 pandemic that I made the decision to pursue a career in tech, starting as a self-taught developer by building static websites and volunteering on projects to gain hands-on experience. This background has shaped my ability to adapt, problem-solve, and work under pressure—skills that I now apply to software development.
I am eager to contribute my skills and continue growing in a supportive environment that values innovation and professional development. I thrive on challenges and look forward to opportunities where I can create impactful digital experiences while continuously evolving as a developer.

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
