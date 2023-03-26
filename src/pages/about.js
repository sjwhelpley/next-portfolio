import Image from 'next/image'
import Layout from '@/components/Layout'
import styles from '@/styles/About.module.css'

import profilePic from '@/images/profile.png'

export default function About() {
    return (
        <Layout>
            <section className={styles.aboutInfo}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: '20%', height: '400px', position: 'relative' }}>
                        <Image
                            id="profile-pic"
                            alt="Picture of Samantha Whelpley"
                            src={profilePic}
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                    <div style={{ width: '80%', padding: '20px' }}>
                        <h1>Hi! Call me Sam.</h1>
                        <p>I'm a 2021 graduate of the University of Pittsburgh where I studied Information Science. I currently work at VISIMO in Pittsburgh as a web developer, working on a variety of projects in React and Django.
                            Some of my first projects were completed when studying abroad during the summer of 2019, but I've also worked with two Pittsburgh web design agencies, <a class="responsival" href="https://www.responsival.com/">Responsival</a>
                            and <a href="https://redtreewebdesign.com/">RedTree Web Design</a>.
                        </p>
                        <p>I am passionate about the design and development process and understanding the people behind technological solutions.
                            My primary skills are in frontend development using React and React Native. At the same time, I am always improving my JavaScript and Python backend skills.
                        </p>
                        <p>I jumped around a number of majors during my years in college, from Mathematics to Sociology to Computer Science, but I was drawn to the versatility
                            and innovation present in Information Science. I was able to focus on the areas of web design and development through this program
                            while also gaining exposure to other areas of tech, like database management systems and networks. Combined with my minor in Computer Science and
                            certificate in Digital Media, I have the tools to continually learn and create.
                        </p>
                        <h2 id="focus">My focus is in <span className={styles.highlight}>frontend development and UI/UX design (web and mobile).</span></h2>
                    </div></div><div className={styles.funFacts}>
                    <p>✈️ Originally from the Lake Erie shores in Ohio and current Pittsburgher, I love traveling to new places and discovering new things. I enjoy exploring National Parks (see my project <a href="portfolio/explore-national-parks">Explore National Parks</a>)
                        and spent six weeks in South Africa the summer of 2019. I'm grateful for any chance to travel and learn from the world!
                    </p>
                    <p>
                        🎶 Outside of school and work, band is my pastime. I played piccolo in the Pitt Band all four years of college,
                        but I have played flute for over ten years. Music can create the strongest bonds and I have been lucky enough to experience that.
                        I have learned true dedication and pride through those weekly practices and performances.
                    </p>
                </div>
            </section>
        </Layout>
    )
}
