import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/split-vignette">Split Vignette</Link>
      <br />
      <Link href="/infinite-scroll">Infinite Scroll</Link>
    </>
  );
}
