"use client";
import styles from "./styles.module.scss";
import Picture1 from "../../../../public/parallax-scroll/medias/4.jpg";
import Picture2 from "../../../../public/parallax-scroll/medias/5.jpg";
import Picture3 from "../../../../public/parallax-scroll/medias/6.jpg";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, transform } from "framer-motion";

const word = "with framer-motion";

export default function Index() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const smSc = useTransform(scrollYProgress, [0, 1], [1.8, 1]);
  const mdSc = useTransform(scrollYProgress, [0, 1], [0.9, 1.3]);
  const lgSc = useTransform(scrollYProgress, [0, 1], [1.6, 0.9]);

  const images = [
    {
      src: Picture1,
      parallax: 0,
      scale: smSc,
    },
    {
      src: Picture2,
      parallax: md,
      scale: mdSc,
    },
    {
      src: Picture3,
      parallax: lg,
      scale: lgSc,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.body}>
        <motion.h1 style={{ y: sm }}>Parallax</motion.h1>
        <h1>Scroll</h1>
        <div className={styles.word}>
          <p>
            {word.split("").map((letter, i) => {
              const rd = Math.floor(Math.random() * -75) - 25;
              const sm = useTransform(scrollYProgress, [0, 1], [0, rd]);

              return (
                <motion.span style={{ top: sm }} key={`l_${i}`}>
                  {letter}
                </motion.span>
              );
            })}
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {images.map(({ src, parallax, scale }, i) => {
          return (
            <motion.div
              style={{ y: parallax }}
              key={`i_${i}`}
              className={styles.imageContainer}
            >
              <motion.div>
                <Image src={src} placeholder="blur" alt="image" fill />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
