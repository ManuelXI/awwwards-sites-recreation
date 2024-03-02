"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav";

export default function index() {
  const [isActive, setIsActive] = useState(false);

  const variants = {
    open: {
      width: "480px",
      height: "650px",
      top: "-25px",
      right: "-25px",
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: "100px",
      height: "40px",
      top: "0px",
      right: "0px",
      //   opacity: 0,
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div className={styles.header}>
      <motion.div
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        className={styles.menu}
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}
