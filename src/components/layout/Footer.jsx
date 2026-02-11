import { Mail, Instagram } from "lucide-react";
import {
    FaGithub,
    FaLinkedin
} from 'react-icons/fa'
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
                    <p className="copyright m-0 p-0">
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

            <div className="footer-dev d-flex align-items-center pt-2 gap-3">
                <div className="redes-dev d-flex gap-3">
                    <a href="https://github.com/LautaroLeall"
                        target="_blank"
                        className='github text-decoration-none'>
                        <FaGithub className='fs-6' />
                    </a>
                    <a href="https://www.linkedin.com/in/lauldp/"
                        target="_blank"
                        className='linkedin text-decoration-none'>
                        <FaLinkedin className='fs-6' />
                    </a>
                </div>
                <div className="text-dev d-flex align-items-center gap-1">
                    <p className="p-0 m-0 copyright">
                        Desarrollado por
                    </p>
                    <a href="https://wa.me/5493813399463" target="_blank" rel="noopener noreferrer" className="copyright">
                        Lautaro Leal
                    </a>
                </div>
            </div>

        </footer>
    );
}