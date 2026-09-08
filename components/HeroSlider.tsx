"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/images/hero/hero-01.jpg",
  "/images/hero/hero-02.jpg",
  "/images/hero/hero-03.jpg",
  "/images/hero/hero-04.jpg",
  "/images/hero/hero-05.jpg",
  "/images/hero/hero-06.jpg",
  "/images/hero/hero-07.jpg",
  "/images/hero/hero-08.jpg",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">

      {images.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0"
          animate={{
            opacity: current === index ? 1 : 0,
            scale: current === index ? 1.08 : 1,
          }}
          transition={{
            opacity: {
              duration: 2.5,
              ease: "easeInOut",
            },
            scale: {
              duration: 8,
              ease: "linear",
            },
          }}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

    </div>
  );
}