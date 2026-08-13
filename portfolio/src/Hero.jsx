import GradientWaves from './component/GradientWaves';
import './css/Hero.css';

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="sec-hero" id="home">
        <GradientWaves />
        <div className="Hero">
          <div className="Hero__content">
            <h1>Big Data / Data Science Engineer</h1>
            <p>My Name is Aoudia Djahid</p>
          </div>
          <div className="Hero__buttons">
            <a href="#contact" className="Hero__button" onClick={(e) => scrollTo(e, "#contact")}>
              Contact Me
            </a>
            <a href="#projects" className="Hero__button" onClick={(e) => scrollTo(e, "#projects")}>
              My Projects
            </a>
          </div>
        </div>
      </div>
    </>
  );
}