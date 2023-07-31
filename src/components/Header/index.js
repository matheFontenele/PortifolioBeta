import styles from './Header.module.css'

export default function NavBar(insta){


    return(
        <header className={styles.header}>
            <span className={styles.nameMe}><h1>MATHEUS</h1><h1>FONTENELE</h1></span>
        <ul>
            <a href="https://www.linkedin.com/in/matheus-fontenele-2a40a4175/"><li><i className="fa-brands fa-linkedin"></i></li></a>
            <a href="https://github.com/matheFontenele"><li><i className="fa-brands fa-github"></i></li></a>
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=matheusfontenele979700@gmail.com"><li><button className={styles.contactMe}><i className="fa-regular fa-envelope"></i> Contact</button></li></a>
        </ul>
        </header>
    )
}