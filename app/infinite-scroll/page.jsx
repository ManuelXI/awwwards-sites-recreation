"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import gsap from "gsap";
import Lenis from '@studio-freight/lenis';
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = 1;

  useEffect(() => {

    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
        scrollTrigger: {
            trigger: document.documentElement,
            start: 0,
            end: window.innerHeight,
            scrub: true,
            onUpdate: e => direction = e.direction * -1
        },
        x: "-500px"
    })

  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <main className={styles.main}>
      <Image
        fill={true}
        src="/infinite-scroll/images/background.jpg"
        alt="image"
      />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Freelance Photgrapher - </p>
          <p ref={secondText}>Freelance Photgrapher - </p>
        </div>
      </div>
    </main>
  );
}
