import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/split-vignette">Split Vignette</Link>
      <br />
      <Link href="/infinite-scroll">Infinite Scroll</Link>
      <br />
      <Link href="/mask-cursor-effect-mp">Mask Cursor Effect</Link>
      <br />
      <Link href="/framer-playground">Framer Playground</Link>
      <br />
      <Link href="/smooth-cards-parallax">Smooth Cards Parallax</Link>
      <br />
      <Link href="/text-gradient-opacity-on-scroll">Text Gradient Opacity Scroll</Link>
      <br />
      <Link href="/projects-gallery-hover">Projects Gallery On Hover</Link>
      <br />
      <Link href="/smooth-parallax-scroll">Smooth Parallax Scroll</Link>
      <br />
      <Link href="/props-navigation-menu">Props Navigation Menu</Link>
      <br />
      <Link href="/parallax-scroll">Parallax Scroll</Link>
    </>
  );
}
