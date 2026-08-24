import styles from './AboutPage.module.css'

//images
import portrait from '../assets/images/About/portrait.png'
import film1 from '../assets/images/About/film1.png'
import film2 from '../assets/images/About/film2.png'
import film3 from '../assets/images/About/film3.png'
import film4 from '../assets/images/About/film4.png'
import film5 from '../assets/images/About/film5.png'
import film6 from '../assets/images/About/film6.png'
import freetime1 from '../assets/images/About/freetime1.png'
import freetime2 from '../assets/images/About/freetime2.png'
import freetime3 from '../assets/images/About/freetime3.png'
import inco1 from '../assets/images/About/inco1.png'
import inco2 from '../assets/images/About/inco1.png'


export default function AboutPage(){
    return(
       <>
       <main className={styles.mainAbout}>
        <section className={styles.topSection}>
        
                <div className={styles.aboutLeft}>
                    <div className={styles.textBox}>
                         <h1>About Gayoung</h1>
                    <p>
                        I like to listen, look closer, and figure things out.
                        I came to design after four years in customer service at Booking.com, where I spent every day listening to customers, solving problems, and seeing the product from their side of the screen. 
                    </p>
                    <p>
                        That experience shaped how I approach design. I’m interested in the moments when what we expect users to do doesn’t quite match what they actually do. 
                    </p>
                    <p>
                        That gap is what motivates me to dig deeper, look for solutions, and try different ways to make the experience work better.
                    </p>

                    </div>
                    <button className={styles.button}>
                        <a
                        
                            href="/resume-gayoung.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            view my resume
                        </a>
                    </button>

                </div>
                <div className={styles.aboutRight}>
                     <img src={portrait} alt="portait"/>
                </div>
               
          
        </section>
        
       </main>
       </>
    )
}