import { motion } from "framer-motion";
import { CONTACT } from "../../config/constants";
import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero" id="home">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <span className="hero-tag">Marketing Inmobiliario</span>

                <h1>
                    Tu propiedad.
                    <br />
                    <span>Su comprador ideal.</span>
                    <br />
                    Nuestra estrategia.
                </h1>

                <p>
                    Krauft nace como una agencia de marketing inmobiliario que combina estrategia, innovación y precisión visual.
                </p>

                <div className="hero-actions">
                    {/* Botón Principal (WhatsApp) */}
                    <a
                        href={CONTACT.WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        Empezar
                    </a>

                    {/* Enlaces de Navegación Interna */}
                    <a href="#servicios" className="btn-primary btn-ghost">
                        Servicios
                    </a>
                    <a href="#proceso" className="btn-primary btn-ghost">
                        Proceso
                    </a>
                </div>
            </motion.div>

            {/* Elemento Decorativo de Fondo (Opcional, para dar profundidad) */}
            <div className="hero-glow"></div>
        </section>
    );
}