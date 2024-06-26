import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className={styles.headerBody}>
            <div className={styles.decOne}>
                <h5> &lt;JC&gt;</h5>
            </div>
           <div className={styles.logo}>
           <h3 className={styles.h3}> Hi,</h3>
           <h1>I'm John Connolly</h1>
           <p>Recently graduated Software Developer with a passion for creating attractive and <br/>user friendly websites.  </p>
         </div>
         <div className={styles.decTwo}>
               <h5>&lt;/&gt;</h5>
           </div>
         <div className={styles.links}>
            <ul>
                <li><Link to="/aboutme">ABOUT ME</Link></li>
                <li>
                <Link to="/CV">CV</Link>
                </li>
                <li><Link to="/contact">CONTACT ME</Link></li>
                <li><Link to="/">PROJECTS</Link></li>
            </ul>

         </div>
        </div>
    )
}

export default Header