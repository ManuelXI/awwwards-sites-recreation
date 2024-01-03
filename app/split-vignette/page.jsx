"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Gallery from "./components/gallery";
import Description from "./components/description";
import Lenis from "@studio-freight/lenis";
import { useSpring } from "framer-motion";

const projects = [
  {
    name: "Dyal Thak",
    handle: "dyal_thak",
  },
  {
    name: "Leidinger Matthias",
    handle: "leidinger_matthias",
  },
  {
    name: "Mark Rammers",
    handle: "mark_rammers",
  },
  {
    name: "Landon Speers",
    handle: "landon_speers",
  },
];

export default function Home() {
  const spring = {
    stiffness: 150,
    damping: 15,
    mouse: 0.1,
  };
  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };
  // const [mousePosition, setMousePosition] = useState({x: 0, y: 0})

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2) * 0.25;
    const targetY = clientY - (window.innerWidth / 2) * 0.3;
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  return (
    <main onMouseMove={mouseMove} className={styles.main}>
      {projects.map(({ handle }, i) => {
        return (
          <Gallery mousePosition={mousePosition} handle={handle} key={i} />
        );
      })}
      <Description mousePosition={mousePosition} projects={projects} />
    </main>
  );
}
