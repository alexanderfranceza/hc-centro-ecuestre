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
  const [loaded, setLoaded] = useState<number[]>([0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % images.length;

        setLoaded((previous) => {
          if (previous.includes(next)) {
            return previous;
          }

          return [...previous, next];
        });

        return next;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">

      {loaded.map((index) => (
        <motion.div
          key={images[index]}
          className="absolute inset-0"
          initial={{
            opacity: index === 0 ? 1 : 0,
            scale: index === 0 ? 1.08 : 1.03,
          }}
          animate={{
            opacity: current === index ? 1 : 0,
            scale: current === index ? 1.08 : 1,
          }}
          transition={{
            opacity: {
              duration: 2.2,
              ease: "easeInOut",
            },
            scale: {
              duration: 8,
              ease: "linear",
            },
          }}
          style={{
            backgroundImage: `url(${images[index]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

    </div>
  );
}