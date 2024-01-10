"use client";
import styles from "../../styles.module.scss";
import Picture1 from "../../../../public/parallax-scroll/medias/1.jpg";
import Picture2 from "../../../../public/parallax-scroll/medias/2.jpg";
import Picture3 from "../../../../public/parallax-scroll/medias/3.jpg";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

const word = "with gsap";

export default function Index() {
  const images = [Picture1, Picture2, Picture3];
  const container = useRef(null);
  const title = useRef(null);
  const characters = useRef([]);
  const imagesRef = useRef([]);
  const actualimagesRef = useRef([]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to(title.current, {y: -50}, 0);

      tl.to(imagesRef.current[1], {y: -150}, 0)
      tl.to(imagesRef.current[2], {y: -225}, 0)
      //   tl.to(imagesRef.current[3], {y: -150}, 0)
      tl.to(actualimagesRef.current[0], {scale: 1}, 0)
      tl.to(actualimagesRef.current[1], {scale: 1.3}, 0)
      tl.to(actualimagesRef.current[2], {scale: 0.9}, 0)

      characters.current.forEach(char => {
        const top =  Math.floor(Math.random() * -75) - 25;
        tl.to(char, {top}, 0)
      })

    });

    return () => context.revert();
  }, []);

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.body}>
        <h1 ref={title} >Parallax</h1>
        <h1>Scroll</h1>
        <div className={styles.word}>
          <p>
            {word.split("").map((letter, i) => {
              return <span ref={ref => characters.current[i] = ref} key={`l_${i}`}>{letter}</span>;
            })}
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {images.map((image, i) => {
          return (
            <div ref={ref => imagesRef.current[i] = ref} key={`i_${i}`} className={styles.imageContainer}>
              <Image ref={ref => actualimagesRef.current[i] = ref} src={image} placeholder="blur" alt="image" fill />
            </div>
          );
        })}
      </div>
    </div>
  );
}
