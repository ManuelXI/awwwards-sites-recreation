import React from "react";
import styles from "./styles.module.scss";

export default function index({ index, title, setModal }) {
  return (
    <div className={styles.project} onMouseEnter={() => {setModal({active: true, index: index})}}
    onMouseLeave={() => {setModal({active: false, index: index})}}
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
}
