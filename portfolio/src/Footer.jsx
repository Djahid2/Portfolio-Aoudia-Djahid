import { useState } from "react";
import "./css/Footer.css";

const EMAIL = "aoudiadjahid8@gmail.com";
const PHONE = "0794634468";
const GITHUB = "https://github.com/Djahid2";

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact depuis le portfolio — ${form.name || "Sans nom"}`);
    const body = encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    // Ouvre le client mail de l'utilisateur avec le message pré-rempli
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="sec-footer"  id="contact">
      <div className="footer-content">
        <div className="footer-info">
          <h2>Let's talk</h2>
          <p className="footer-tagline">
           Have a project in mind, an opportunity, or simply want to connect?
Feel free to get in touch.
          </p>

          <ul className="footer-contacts">
            <li>
              <span className="footer-contacts__label">Email</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <span className="footer-contacts__label">Téléphone</span>
              <a href={`tel:${PHONE}`}>{PHONE}</a>
            </li>
            <li>
              <span className="footer-contacts__label">See more projects on GitHub</span>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                {GITHUB.replace("https://", "")}
              </a>
            </li>
          </ul>
        </div>

        <form className="footer-form" onSubmit={handleSubmit}>
          <div className="footer-form__row">
            <label>
              <span>Nom</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="vous@exemple.com"
                required
              />
            </label>
          </div>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Parlez-moi de votre projet..."
              rows={5}
              required
            />
          </label>

          <button type="submit" className="footer-form__submit">
            Envoyer le message
          </button>
        </form>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Aoudia Djahid</span>
        <span className="footer-bottom__role">Big Data / Data Science Engineer</span>
      </div>
    </footer>
  );
}