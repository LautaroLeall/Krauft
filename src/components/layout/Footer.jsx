import { Mail, Instagram } from "lucide-react";
import {
    FaGithub,
    FaLinkedin
} from 'react-icons/fa'
import { CONTACT, DEVELOPERS } from "../../config/constants";
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
                    <a href={`mailto:${CONTACT.EMAIL}`} className="footer-link-item" target="_blank" rel="noopener noreferrer">
                        <Mail size={16} />
                        <span>Email</span>
                    </a>

                    <a
                        href={CONTACT.INSTAGRAM}
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
                    <a href={DEVELOPERS.LAUTARO.GITHUB}
                        target="_blank"
                        aria-label="Perfil de GitHub del desarrollador"
                        className='github text-decoration-none'>
                        <FaGithub className='fs-6' />
                    </a>
                    <a href={DEVELOPERS.LAUTARO.LINKEDIN}
                        target="_blank"
                        aria-label="Perfil de LinkedIn del desarrollador"
                        className='linkedin text-decoration-none'>
                        <FaLinkedin className='fs-6' />
                    </a>
                </div>
                <div className="text-dev d-flex align-items-center gap-1">
                    <p className="p-0 m-0 copyright">
                        Desarrollado por
                    </p>
                    <a href={DEVELOPERS.LAUTARO.WHATSAPP} target="_blank" rel="noopener noreferrer" className="copyright">
                        {DEVELOPERS.LAUTARO.NAME}
                    </a>
                </div>
            </div>

        </footer>
    );
}