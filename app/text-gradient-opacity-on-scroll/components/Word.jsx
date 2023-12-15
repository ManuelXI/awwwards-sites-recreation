import React, { useRef } from "react";
import styles from "../styles.module.scss";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Paragraph({ value }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.4"],
  });

  const words = value.split(" ");

  return (
    <p
      className={styles.paragraph}
      ref={element}
      style={{ opacity: scrollYProgress }}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        console.log([start, end]);
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  console.log(range);

  return (
    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span
        style={{
          opacity,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};
