"use client";
import styles from "./styles.module.scss";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { projects } from "./components/data";
import Card from "./components/Card";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // scrollYProgress.on('change', e => console.log(scrollYProgress.current));

  });
  return (
    <main ref={container} className={styles.main}>
      {projects.map((project, index) => {
        const targetScale = 1 - ((projects.length - index) * 0.05)
        return <Card key={index} i={index} {...project} progress={scrollYProgress} range={[index * 0.25, 1]} targetScale={targetScale} />;
      })}
    </main>
  );
}
