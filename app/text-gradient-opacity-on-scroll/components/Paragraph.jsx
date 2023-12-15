import React, { useRef } from "react";
import styles from "../styles.module.scss";
import { useScroll, motion } from "framer-motion";

export default function Paragraph({ value }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.4"],
  });


  return (
    <motion.p className={styles.paragraph} 
    ref={element}
    style={{opacity: scrollYProgress}}
    >
      {value}
    </motion.p>
  );
}
