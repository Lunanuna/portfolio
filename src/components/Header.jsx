import { Link } from 'react-router-dom';
import styles from './Header.module.css'; 
import logo from '../assets/icons/logo.png'

export default function Header() {
    return (
        <header className={styles.header}> 
             <div className={styles.logo}>
                <Link to="/">
                <img src={logo} alt="logo"/>
                </Link>
             </div>
             <nav className={styles.nav}> 
                <Link to="/" className={styles.navLink}>Projects</Link> 
                <Link to="/About" className={styles.navLink}>About</Link>
                <Link to="/Archive" className={styles.navLink}>Archive</Link>
            </nav>
        </header>
    )
}