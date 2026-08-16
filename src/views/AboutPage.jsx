import aboutProfile from '../assets/images/profile/about.jpeg'
import styles from './AboutPage.module.css'
export default function AboutPage(){
    return(
       <>
       <main>
        <div className={styles.mainL}>
            <h1>Hi my name is Gayoung!</h1>
        <p>some introduction</p>
        </div>
        <div className={styles.mainR}>
            <img src={aboutProfile} alt="about-profile"/>    
        </div>
        
       </main>
       </>
    )
}