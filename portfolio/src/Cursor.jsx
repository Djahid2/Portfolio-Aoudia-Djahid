import { useEffect, useRef, useState } from "react";
import "./css/Cursor.css";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    // Position réelle de la souris (mise à jour instantanée)
    const mouse = { x: 0, y: 0 };
    // Position "retardée" du cercle (interpolation = mouvement fluide)
    const ring = { x: 0, y: 0 };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      setHidden(false);

      // Le point central suit instantanément
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }
    };

    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    // Détecte le survol de tout élément interactif
    const onOver = (e) => {
      if (e.target.closest("a, button, input, textarea, [data-cursor-hover]")) {
        setHovered(true);
      }
    };
    const onOut = (e) => {
      if (e.target.closest("a, button, input, textarea, [data-cursor-hover]")) {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    // Animation d'interpolation (lerp) pour le cercle qui "traîne" légèrement
    let raf;
    const animate = () => {
      ring.x += (mouse.x - ring.x) * 0.15;
      ring.y += (mouse.y - ring.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${hidden ? "cursor--hidden" : ""}`}
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${hovered ? "cursor-ring--hover" : ""} ${hidden ? "cursor--hidden" : ""}`}
      />
    </>
  );
}