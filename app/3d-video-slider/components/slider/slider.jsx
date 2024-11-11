"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import dynamic from "next/dynamic";
import { videos } from "./videos";
import styles from "../../styles.module.scss";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Slider() {
  const sliderRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    if (isClient && sliderRef.current) {
      initalizeCards();
    }
  }, [isClient, sliderRef]);

  const initalizeCards = () => {
    if (sliderRef.current) {
      const cards = Array.from(sliderRef.current.querySelectorAll(".card"));

      gsap.to(cards, {
        y: (i) => 0 + 20 * i + "%",
        z: (i) => 15 * i,
        duration: 1,
        ease: "power3.out",
        stagger: -0.1,
      });
    }
  };

  const handleClick = () => {
    
    if (isAnimating) return;
    setIsAnimating(true);

    const slider = sliderRef.current;
    const cards = Array.from(slider.querySelectorAll(".card"));

    const lastCard = cards.pop();

    gsap.to(lastCard, {
      y: "+=150%",
      duration: 0.75,
      ease: "power3.out",
      onStart: () => {
        setTimeout(() => {
            slider.prepend(lastCard);
            initalizeCards();
            setTimeout(() => {
                setIsAnimating(false);
            }, 1000);
        }, 300);
      }
    });
  };

  return (
    <>
      <div className={styles.container} onScroll={handleClick} onClick={handleClick}>
        <div className={styles.slider} ref={sliderRef}>
          {videos.map((video) => (
            <div className={`card ${styles["card"]}`} key={video.id}>
              <div className={styles["card-info"]}>
                <div className={styles["card-item"]}>
                  <p>{video.date}</p>
                </div>
                <div className={styles["card-item"]}>
                  <p>{video.title}</p>
                </div>
                <div className={styles["card-item"]}>
                  <p>{video.category}</p>
                </div>
              </div>
              <div className={styles["video-player"]}>
                <ReactPlayer
                  url={`https://vimeo.com/${video.id}`}
                  controls={false}
                  autoPlay={false}
                  loop={true}
                  playing
                  muted
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
