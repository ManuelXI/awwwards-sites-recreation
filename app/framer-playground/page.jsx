"use client";
import BasicsOfMotion from "./components/BasicsOfMotion";
import styles from "./styles.module.scss";
import Gestures from "./components/Gestures";
import AnimationControls from "./components/AnimationControls";
import ViewBasedAnimations from "./components/ViewBaseAnimaions";
import ScrollAnimations from "./components/ScrollAnimation";

export default function Home() {
  return (
    <main>
      <div className="">
        {/* <BasicsOfMotion /> */}
        {/* <Gestures /> */}
        {/* <AnimationControls /> */}
        {/* <ViewBasedAnimations /> */}
        <ScrollAnimations />
      </div>
    </main>
  );
}
