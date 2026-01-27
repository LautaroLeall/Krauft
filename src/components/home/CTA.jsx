// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./CTA.css";

export default function CTA() {
    return (
        <section className="cta">
            <motion.div
                className="cta-container"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <h2>
                    ¿Listo para <span>vender más propiedades</span>?
                </h2>

                <p>
                    Trabajamos con inmobiliarias que quieren resultados reales, no
                    promesas.
                </p>

                <div className="cta-actions">
                    <a
                        href="https://wa.me/5490000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        Hablemos
                    </a>

                    <a href="/nosotros" className="btn-outline">
                        Contactar
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
