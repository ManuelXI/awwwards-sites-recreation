"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Paragraph from "./components/Paragraph";
import Lenis from "@studio-freight/lenis";
import Word from "./components/Word";
import Character from "./components/Character";

const paragraph =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <main className={styles.main}>
      {/* <div style={{ height: "100vh" }}> </div>
      <Paragraph value={paragraph} />
      <div style={{ height: "100vh" }}> </div>
      <Word value={paragraph}  /> */}
      <div style={{ height: "100vh" }}> </div>
      <Character value={paragraph}  />
      <div style={{ height: "100vh" }}> </div>
    </main>
  );
}
