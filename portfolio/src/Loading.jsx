import React, { useEffect, useState } from "react";
import Pages from './Pages';

/**
 * Portfolio — Intro animée + Hero
 * Aoudia Djahid — Big Data / Data Science Engineer
 *
 * Comment l'utiliser dans un projet Vite/CRA :
 * 1. Copie ce fichier dans src/Loading.jsx
 * 2. Dans App.jsx : import Loading from "./Loading";
 *    puis <Loading /> dans le render.
 * 3. Aucune dépendance externe requise (pas besoin de framer-motion).
 */

const WORDS = [
  "Hello",
  "My name is",
  "Aoudia Djahid",
  "and I'm",
  "Big Data / Data Science Engineer",
];

const WORD_DURATION = 750; // ms entre chaque mot

export default function Loading() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("loading"); // "loading" | "flying" | "hero"

  useEffect(() => {
    if (phase !== "loading") return;

    if (index < WORDS.length - 1) {
      const t = setTimeout(() => setIndex((i) => i + 1), WORD_DURATION);
      return () => clearTimeout(t);
    } else {
      // dernier mot affiché un peu plus longtemps, puis envol
      const t = setTimeout(() => setPhase("flying"), WORD_DURATION + 300);
      return () => clearTimeout(t);
    }
  }, [index, phase]);

  useEffect(() => {
    if (phase === "flying") {
      const t = setTimeout(() => setPhase("hero"), 900); // durée de l'animation d'envol
      return () => clearTimeout(t);
    }
  }, [phase]);

  return (
    <div style={styles.wrapper}>
      {phase !== "hero" && (
        <div className={`loader ${phase === "flying" ? "loader--fly" : ""}`}>
          <span key={index} className="loader__word">
            {WORDS[index]}
          </span>
        </div>
      )}

      {phase === "hero" && <Pages />}
    </div>
  );
}



const styles = {
  wrapper: {
    minHeight: "100vh",
    width: "100%",
    position: "relative",
    background:
      "radial-gradient(circle at 50% 20%, #151516 0%, #0c0c0e 45%, #050505 100%)",
    color: "#f5f5f5",
    fontFamily:
      "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
  },
};

