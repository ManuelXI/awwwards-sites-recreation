import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ViewBasedAnimations() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  })

  useEffect(() => {
    console.log('In View', isInView);
  }, [isInView])
  

  return (
    <>
      <div style={{ height: "150vh" }} />
      <motion.div
        style={{
          height: "100vh",
          background: "black",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInView ? "red" : 'blue',
          transition: "1s background",
        }}
      />
    </>
  );
}
