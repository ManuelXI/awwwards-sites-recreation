'use client';

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Header from './components/header'

export default function Home() {
  return (
    <main className={styles.main} >
        <Header />
    </main>
  )
}


// https://props.studiolumio.com/
