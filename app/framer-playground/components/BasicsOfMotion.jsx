"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BasicsOfMotion() {
  const [Isvisible, setIsVisible] = useState(true);
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button
        className="example-button"
        onClick={() => setIsVisible(!Isvisible)}
        layout
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout" >
        {Isvisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0
            }}
            animate={{
                rotate: "180deg",
                scale: 1,
                y: [0, 150, -150, -150, 0]
            }}
            exit={{
                rotate: "0deg",
                scale: 0,
                y: 0
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1]
              // type: 'spring'
            }}
            style={{
              width: "150px",
              height: "150px",
              background: "black",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
