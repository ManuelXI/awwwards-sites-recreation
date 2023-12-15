import React, { useRef } from "react";
import styles from "../styles.module.scss";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Paragraph({ value }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
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
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className={styles.word}>
      {characters.map((char, i) => {
        const start = range[0] + (i * step);
        const end = range[0] + ((i + 1) * step);
        // console.log(i);
        // console.log('ee',i%2);
        return (
          <Character key={`c_${i}`} range={[start, end]} progress={progress}
          even={i%2 === 0}
          >
            {char}
          </Character>
          // <span  key={`c_${i}`} >{char}</span>
        );
      })}
    </span>
  );
};

const Character = ({ children, range, progress, even }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const translateY = useTransform(progress, range, [50, 0]);

  console.log(even);

  return (
    <span>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{opacity: opacity, top: even ? translateY : 0, position: 'relative', bottom:  even ? translateY : 0 }}>{children}</motion.span>
    </span>
  );
};
