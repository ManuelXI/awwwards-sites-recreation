import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { opacity } from "../../anim";

export default function index({ src, isActive }) {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}
      className={styles.imageContainer}
    >
      <Image
        src={`/props-navigation-menu/images/${src}`}
        fill={true}
        alt="image"
      />
    </motion.div>
  );
}
