import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useBaseUrl from "@docusaurus/useBaseUrl";
import "./styles.css";

export default function HomeHero() {
  const bg = useBaseUrl("img/slider/img1.jpg"); // sua imagem fixa

  const messages = [
    "Configurações completas do IBS e CBS",
    "Guias passo a passo para o time de suporte",
    "Documentação clara e atualizada da legislação",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-container">
      <img src={bg} className="hero-bg" />
      
      <div className="hero-overlay">
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            {messages[index]}
          </motion.h1>
        </AnimatePresence>
      </div>
    </div>
  );
}
