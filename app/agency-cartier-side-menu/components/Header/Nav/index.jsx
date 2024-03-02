import React from "react";
import styles from "./styles.module.scss";
import { links, footerLinks } from "./data";
import { motion } from "framer-motion";

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      opacity: { duration: 0.35 },
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
  },
};

export default function index() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          return (
            <div key={i} className={styles.linkContainer}>
              <motion.div
                custom={i}
                variants={perspective}
                animate="enter"
                exit="exit"
                initial="initial"
              >
                <a href={link.href}>
                  <div className={styles.itemsWrapper}>
                    <div className={styles.iconContainer}>
                      <svg
                        width="105"
                        height="62"
                        viewBox="0 0 105 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 31H103M103 31L73.5 1.5M103 31L73.5 60.5"
                          stroke="#010202"
                          stroke-width="2"
                          vector-effect="non-scaling-stroke"
                        ></path>
                      </svg>
                    </div>
                    <p>{link.title}</p>
                  </div>
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <div className={styles.footer}>
        {footerLinks.map((link, i) => {
          return (
            <motion.a
              key={`f${i}`}
              custom={i}
              variants={slideIn}
              animate="enter"
              exit="exit"
              initial="initial"
              href={link.href}
            >
              {link.title}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
