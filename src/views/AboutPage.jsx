import aboutProfile from '../assets/images/profile/about.jpeg'
import styles from './AboutPage.module.css'
export default function AboutPage(){
    return(
       <>
       <main>
        <div className={styles.mainL}>
            <h1>Hi my name is Gayoung!</h1>
        <p>
            I came to design after four years in customer service at Booking.com, where I spent every day listening to customers, solving problems, and seeing the product from their side of the screen.

That experience shaped how I approach design. I’m interested in the moments when what we expect users to do doesn’t quite match what they actually do. That gap is what motivates me to dig deeper, look for solutions, and try different ways to make the experience work better.
        </p>
        </div>
        <div className={styles.mainR}>
            <img src={aboutProfile} alt="about-profile"/>    
        </div>
        
       </main>
       </>
    )
}