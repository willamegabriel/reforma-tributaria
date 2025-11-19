import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useBaseUrl from "@docusaurus/useBaseUrl";
import "./styles.css";

export default function HomeSlider() {
  const images = [
    useBaseUrl("img/slider/ibs1.png"),
    useBaseUrl("img/slider/ibs2.png"),
    useBaseUrl("img/slider/ibs3.png"),
  ];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <div className="slider-wrapper">
      <div className="slider-viewport">

        <AnimatePresence>
          <motion.div
            key={index}
            className="slide"
            initial={{ opacity: 0, scale: 1.05, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.97, x: -60 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          >
            <motion.img
              src={images[index]}
              alt="slide"
              className="slide-image"
              initial={{ scale: 1.13 }}
              animate={{ scale: 1 }}
              transition={{ duration: 5, ease: "linear" }}
            />

            <div className="slide-overlay">
              <h1 className="slide-title">Documentação IBS e CBS</h1>
              <p className="slide-subtitle">
                Informações detalhadas, exemplos reais e guias visuais modernos.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicadores */}
        <div className="slider-dots">
          {images.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
