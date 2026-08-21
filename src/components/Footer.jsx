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
                    <a href="/resume-gayoung.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.resumeButton} // 기존 버튼 클래스명 그대로 사용
                    >
                    Resume
                    </a>
                </li>
            </ul>
        </footer>
    )
}