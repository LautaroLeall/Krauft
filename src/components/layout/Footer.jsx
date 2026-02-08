import { Mail, Instagram } from "lucide-react";
import "./Footer.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">

                {/* IZQUIERDA: COPY + LOGO TEXTO */}
                <div className="footer-brand">
                    <span className="footer-logo">krauft<span className="text-lime">.</span></span>
                    <span className="divider">|</span>
                    <p className="copyright">
                        © {currentYear} Todos los derechos reservados.
                    </p>
                </div>

                {/* DERECHA: REDES SOCIALES */}
                <div className="footer-links">
                    <a href="mailto:bykrauft@gmail.com" className="footer-link-item" target="_blank" rel="noopener noreferrer">
                        <Mail size={16} />
                        <span>Email</span>
                    </a>

                    <a
                        href="https://instagram.com/bykrauft"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link-item"
                    >
                        <Instagram size={16} />
                        <span>Instagram</span>
                    </a>
                </div>

            </div>
        </footer>
    );
}