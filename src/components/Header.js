import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.headerBody}>
           <div className={styles.logo}>
           <h1>John Connolly's Portfolio </h1>
         </div>
         <div className={styles.links}>
            <ul>
                <li>ABOUT ME</li>
                <li>CV</li>
                <li>CONTACT ME</li>
            </ul>

         </div>
        </div>
    )
}

export default Header