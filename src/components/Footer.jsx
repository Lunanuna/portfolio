import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.heading}>Let's Chat!</p>
            <ul className={styles.contact}>
                <li>
                    <a href="mailto:hanga93@gmail.com">hanga93@gmail.com</a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/gayoung-han93/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                        
                </li>
                <li>
                    <a href="/gayeong-han-cv.pdf" target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </li>
            </ul>
        </footer>
    )
}