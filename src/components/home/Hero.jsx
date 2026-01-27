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
                    <button className="btn-primary">Empezar</button>
                    <button className="btn-outline">Nuestro sistema</button>
                </div>
            </motion.div>
        </section>
    );
}
