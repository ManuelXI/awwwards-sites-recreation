'use client'
import styles from './styles.module.scss'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react';
import GSAP from './components/GSAP'
import FramerMotion from './components/FramerMotion'

export default function Home() {

    useEffect( () => {
        const lenis = new Lenis()
        
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
    }, [])

    return (
        <main className={styles.main}>
            <div className={styles.spacer}></div>
            <GSAP />
            <FramerMotion />
            <div className={styles.spacer}></div>
        </main>
    )
}
