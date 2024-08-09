import styles from './AboutMe.module.css'

function AboutMe() {
    return(
        <div className={styles.aboutmeContainer}>
            <h3>&lt;p&gt;</h3>
            <h1 style={{marginTop: "-4%"}}>About me</h1>
            <p>
            Hello and thank you for taking the time to check out my portfolio. I am excited to find the perfect position for someone like me, who is eager to continue my professional growth in the industry. 
I have recently completed my level 4 apprenticeship in Software Engineering with a merit and I am eager to leverage my skills and passion for software development. <br/>
During my apprenticeship I had the opportunity to work on a range of projects that honed my proficiency in frontend technologies, languages and frameworks like React, JavaScript and Angular.<br/> I also built a full stack application with a React frontend as part of my final project. My experience includes creating responsive and user friendly interfaces. Working with different libraries like AG-Grid and High Charts and different testing libraries and methodologies. <br/>I have also gained experience in working in cross functional teams and working in an agile environment. <br/><br/>
Whilst I believe my specialism is in frontend development I have also gained experience working on DevOps projects for which I have gained an insight and understanding of the benefits of continuous collaboration between development and operations teams.<br/>
Before my apprenticeship I was a pastry chef for many years and it was not until the Covid 19 pandemic that I decided to change careers. I was a self-taught developer working on static websites and a volunteer project to gain industry experience. <br/><br/>
I am self-motivated and determined to succeed and develop my capabilities to the highest possible standard. 
I am proficient in HTML, CSS, JavaScript and React and I have had exposure to other frameworks such as Next.js and Angular. I have a solid understanding of software development best practices and design principles. I have experience in version control systems, continuous integration and deployment pipelines. 
I am enthusiastic about the opportunity to work somewhere where I can contribute my current skills and, more importantly, thrive in a supportive atmosphere that encourages continuous learning and professional growth. I am eager to embrace the challenges and opportunities that come next as I continue to develop into a more polished professional.<br/><span className={styles.htmlEntity}>&lt;/p&gt;</span>
            </p>
            
        </div>
    )
}

export default AboutMe