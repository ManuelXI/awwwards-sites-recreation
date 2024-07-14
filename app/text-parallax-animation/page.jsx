"use client";
import Picture1 from "public/text-parallax-animation/images/1.jpg";
import Picture2 from "public/text-parallax-animation/images/2.jpg";
import Picture3 from "public/text-parallax-animation/images/3.jpg";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <main className={`overflow-hidden ${styles.main}`}>
      <div className="h-[100vh]" />
      <div ref={container}>
        <Slider
          src={Picture1}
          left="-55%"
          progress={scrollYProgress}
          direction="left"
        />
        <Slider
          src={Picture2}
          left="-15%"
          progress={scrollYProgress}
          direction="right"
        />
        <Slider
          src={Picture3}
          left="-40%"
          progress={scrollYProgress}
          direction="left"
        />
      </div>
      <div className="h-[100vh]" />
    </main>
  );
}

const Slider = ({ src, left, progress, direction }) => {
    const dir = direction === "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-250 * dir, 250 * dir]);
  return (
    <motion.div className="relative flex whitespace-nowrap" style={{ left, x }}>
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  );
};

const Phrase = ({ src }) => {
  return (
    <div className={"px-5 flex gap-5 items-center"}>
      <p className="text-[7.5vw]">Front End Developer</p>

      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
      </span>
    </div>
  );
};
