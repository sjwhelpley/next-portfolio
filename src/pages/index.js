import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import SocialMedia from '@/components/SocialMedia'
import Link from 'next/link'

const projects = [
  {
    name: 'POEMOTION',
    subtitle: 'Side Project',
    description: 'Web application that uses Computer Vision and OpenAI to generate an immersive experience based on the user&apos;s mood.',
    path: '/portfolio/poemotion',
    imgSrc: ''
  },
  {
    name: 'prioriTask',
    subtitle: 'RedTree Web Design',
    path: '/portfolio/prioritask',
    description: 'Task management application developed with Material UI and the MERN tech stack (MongoDB, Express, React, Node.js).',
    imgSrc: ''
  }
]

function ProjectCard({ name, subtitle, path, description, imgSrc }) {
  return (
    <div style={{ width: '50%', padding: '20px' }}>
      <Link href={path}>
        <div className={styles.projectContent}>
          <h2>{name}</h2>
          <h3>{subtitle}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  )
}

export default function Home() {
  return (
    <Layout>
      <section className={styles.intro}>
        <h1 className={styles.introTitle} style={{ marginBottom: '20px' }}>
          Hi, I'm Samantha!<br />
          Creative {' '}<span className={styles.highlight}>software developer</span>{' '}
          in Pittsburgh.
        </h1>
        <SocialMedia />
      </section>

      <main style={{ display: 'flex', flexWrap: 'wrap' }}>
        {projects.map(p => <ProjectCard key={p.name} name={p.name} subtitle={p.subtitle} description={p.description} path={p.path} imgSrc={p.imageSrc} />)}
      </main>
    </Layout>
  )
}
