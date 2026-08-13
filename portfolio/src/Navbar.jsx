import { useEffect, useState } from "react";
import "./css/Navbar.css";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About me", href: "#about" },
  { label: "Project", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <a
        href="#home"
        className="navbar__brand"
        onClick={(e) => handleClick(e, "#home")}
      >
        Djahid<span>.</span>
      </a>

      <ul className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
        {LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`navbar__toggle ${open ? "navbar__toggle--open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Ouvrir le menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}