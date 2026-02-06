// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
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
                    Impulsamos inmobiliarias con branding, automatización y generación de
                    leads calificados.
                </p>

                <div className="hero-actions">
                    <a href="https://wa.me/+5493816436944" target="_blank" rel="noopener noreferrer" className="btn-primary">Empezar</a>
                    <a href="#services" className="btn-primary">Servicios</a>
                    <a href="#process" className="btn-primary">Proceso</a>
                </div>
            </motion.div>
        </section>
    );
}
