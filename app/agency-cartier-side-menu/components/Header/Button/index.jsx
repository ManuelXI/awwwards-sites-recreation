import React from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

export default function index({ isActive, setIsActive }) {
  return (
    <div onClick={() => setIsActive(!isActive)} className={styles.button}>
      <motion.div
        animate={{ top: isActive ? "-100%" : "0" }}
        className={styles.slider}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.el}>
          <PerspectiveText label={"Menu"} />
        </div>
        <div className={styles.el}>
          <PerspectiveText label={"Close"} />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
