import styles from './Header.module.css'; 

export default function Main(){
    return(
        <>
        <main>
            <div className={styles.text}>
                <div>Hi</div>
                <div>My name is Gayoung &</div>
                <div>I am UX/UI Designer</div>
            </div>
            <div className={styles.portrait}>
                <div>there will be a image</div>
            </div>
        </main>
        </>
    )
}