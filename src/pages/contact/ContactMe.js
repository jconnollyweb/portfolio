import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './ContactMe.module.css'


function ContactMe() {
    return (
        <div className={styles.contactContainer}>
            <h1> Contact Me</h1>
            <div className={styles.contLinks}>
            <a href="https://www.linkedin.com/in/john-connolly-web/" target="_blank">
                <div className={styles.linkLink}>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <h2 className={styles.h2}>Visit my LinkedIn</h2>
                </div>
            </a>
            <div className={styles.phoneLink}>
            <FontAwesomeIcon icon={faPhone} /> 
            <h2 className={styles.h2}>Give me a call on <br/> 07800634228 </h2>
            </div>
            <div className={styles.emailLink}>
            <a href="mailto:johnc1983@hotmail.co.uk" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} />
            <h2 className={styles.h2}>Send me an Email</h2>
            </a>
            </div>
            <div className={styles.emailLink}>
            <a href="https://github.com/jconnollyweb" target="_blank">
               <FontAwesomeIcon icon={faGithub} />
            <h2 className={styles.h2}>Visit my GitHub</h2>
            </a>
            </div>
            </div>
        </div>
    )
}

export default ContactMe