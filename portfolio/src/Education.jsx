import { useEffect, useRef, useState } from "react";
import "./css/Education.css";

/**
 * Calcule une "progression" de -1 à 1 pour un élément par rapport
 * au centre du viewport :
 *   progress = 1   -> élément encore en dessous du centre (pas encore atteint)
 *   progress = 0   -> élément parfaitement centré (clair, net)
 *   progress = -1  -> élément passé au-dessus du centre (en sortie)
 */
function getProgress(el) {
  if (!el) return 1;
  const rect = el.getBoundingClientRect();
  const elCenter = rect.top + rect.height / 2;
  const viewportCenter = window.innerHeight / 2;
  const raw = (elCenter - viewportCenter) / (window.innerHeight / 2);
  return Math.max(-1, Math.min(1, raw));
}

export default function Education() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    let raf = null;

    const update = () => {
      setProgress(getProgress(sectionRef.current));
      raf = null;
    };

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update);
    };

    update(); // valeur initiale
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Opacité et flou communs : les deux cartes deviennent nettes
  // exactement au même moment (quand la section est centrée à l'écran)
  const op = 1 - Math.min(Math.abs(progress) * 1.1, 0.9);
  const blur = Math.min(Math.abs(progress) * 10, 10);

  // --- Carte 1 : entre par la gauche (un peu en haut), sort par la droite ---
  const style1 = {
    "--tx": `${progress * -60}vw`,
    "--ty": `${progress * -30}px`,
    "--op": op,
    "--blur": `${blur}px`,
  };

  // --- Carte 2 : entre par la droite (un peu en bas), sort par la gauche ---
  const style2 = {
    "--tx": `${progress * 60}vw`,
    "--ty": `${progress * 30}px`,
    "--op": op,
    "--blur": `${blur}px`,
  };

  const styleTitle = {
    "--rot": `${progress * 80}deg`,
    "--op": op,
    "--blur": `${blur}px`,
  };

  return (
    <div className="sec_education" ref={sectionRef}>
      <h2 style={styleTitle}>Education</h2>
      <div className="container_edu">
      <div className="con_edu" style={style1}>
        <div className="Cercle_blue" />
        <h3>License of Information Systems and Software</h3>
        <p>University Of Science and Technology Houari Boumediene</p>
      </div>

      <div className="con_edu" style={style2}>
        <div className="Cercle_blue" />
        <h3>Master of Big Data</h3>
        <p>University Of Science and Technology Houari Boumediene</p>
      </div>
      </div>
    </div>
  );
}