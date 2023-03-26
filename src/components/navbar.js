import React from 'react';
import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'
import NavLink from '../components/navlink';

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggle = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <nav style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/">
                <h2>samantha joy whelpley</h2>
            </Link>

            <div className={styles.mobileMenu} onClick={toggle}>
                <h2>MENU</h2>
            </div>
            <div style={isOpen ? { height: '57px', transition: 'all 1s ease', width: '100%' } : { height: '0', transition: 'height 1s ease', visibility: 'hidden' }}>
                <Link href="/"><h3 className={styles.navLinks}>Work</h3></Link>
                <Link href="about"><h3 className={styles.navLinks}>About</h3></Link>
                <Link href="resume"><h3 className={styles.navLinks}>Resume</h3></Link>
            </div>

            <div className={styles.desktopMenu}>
                <NavLink href="/">
                    <h3 className={styles.navLinks}>Work</h3>
                </NavLink>
                <NavLink href="/about">
                    <h3 className={styles.navLinks}>About</h3>
                </NavLink>
                <NavLink href="/resume">
                    <h3 className={styles.navLinks}>Resume</h3>
                </NavLink>
            </div>
        </nav >
    )
}