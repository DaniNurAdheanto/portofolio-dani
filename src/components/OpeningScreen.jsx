import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const greetings = [
  "Hallo",
  "Hola",
  "Bonjour",
  "Ciao",
  "Konnichiwa",
  "Annyeong",
  "Namaste",
];

const WORD_DURATION_MS = 500;
const TOTAL_DURATION_MS = greetings.length * WORD_DURATION_MS;

const OpeningScreen = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => {
        if (prev >= greetings.length - 1) {
          // Hentikan interval ketika sudah di kata terakhir
          clearInterval(intervalId);
          return prev;
        }
        return prev + 1;
      });
    }, WORD_DURATION_MS);

    const timeoutId = setTimeout(() => {
      setVisible(false);
    }, TOTAL_DURATION_MS);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  if (!visible) return null;

  const isFirstWord = index === 0;
  const textColor = isFirstWord ? "rgba(255, 255, 255,)" : "#ffffff";

  return (
    <div className="opening-screen">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="opening-screen-text"
          style={{
            color: textColor,
            fontFamily:
              '"SF Pro Text", "SF Pro Display", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          {greetings[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default OpeningScreen;

