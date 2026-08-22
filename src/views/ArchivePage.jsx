import styles from './ArchivePage.module.css';

export default function ArchivePage(){
    return(<>
    <main>
        <section className={styles.header}>
            <h1>Early Solo Work </h1>
            <p>Self-taught JavaScript, React experiments, and illustration work from before I started studying multimedia design at Erhvervsakademi Aarhus. A few things I wanted to keep around.</p>
        </section>
        <section className={styles.programming}>
            <h2>Basic Programming</h2>
            <ul>
                <li>
                    Weather App , keyword: React
                </li>
                <li>
                    Etch and Sketch , keyword: JavaScript
                </li>
                <li>
                    Library , keywords: JavaScript
                </li>
            </ul>
        </section>
        <section className="styles.illustration">
            <div>여기에는 한 row에 3개씩 보이게 갤러리처럼 할거같아. </div>
        </section>
    </main>
    </>)
}