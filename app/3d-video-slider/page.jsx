import React from 'react'
import styles from "./styles.module.scss";
import Slider from './components/slider/slider';

export default function Home() {
  return (
    <div className={styles.root}>
        <Slider/>
    </div>
  )
}
