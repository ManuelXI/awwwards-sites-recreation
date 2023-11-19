import { motion, useAnimationControls } from "framer-motion";

export default function AnimationControls() {
  const flipControls = useAnimationControls();

  const handleClick = () => {
    flipControls.start("flip");
  };

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <button className="example-button" onClick={handleClick}>
        Flip it!
      </button>

      <motion.div
        style={{
          width: 150,
          height: 150,
          background: "black",
        }}
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
        initial="initial"
        animate={flipControls}
        // whileHover='flip'
      ></motion.div>
    </div>
  );
}
