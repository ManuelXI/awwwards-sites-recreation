"use client";
import styles from "./styles.module.scss";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import ZoomParallax from './components/ZoomParallax'

export default function Home() {
  
    useEffect(() => {
      const lenis = new Lenis();
  
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
  
    });

    return (
      <main className={styles.main}>
        <ZoomParallax />
      </main>
    );
  }

//   https://www.exoape.com/
  