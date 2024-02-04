import styles from "./styles.module.scss";
import Image from "next/image";
import Picture1 from "../../../../public/scroll-parallax-animation/images/1.jpeg";
import Picture2 from "../../../../public/scroll-parallax-animation/images/2.jpeg";
import Picture3 from "../../../../public/scroll-parallax-animation/images/3.jpg";
import Picture4 from "../../../../public/scroll-parallax-animation/images/4.jpg";
import Picture5 from "../../../../public/scroll-parallax-animation/images/5.jpg";
import Picture6 from "../../../../public/scroll-parallax-animation/images/6.jpg";
import Picture7 from "../../../../public/scroll-parallax-animation/images/7.jpeg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4.2]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className={styles.imageContainer}>
                <Image src={src} fill alt="image" placeholder="blur" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
