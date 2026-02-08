// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import "./CTA.css";

export default function CTA() {
    return (
        <section className="cta-section">
            {/* Patrón de fondo */}
            <div className="cta-bg-pattern"></div>

            <motion.div
                className="cta-container"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            >
                <span className="cta-eyebrow">Marketing de Alto Impacto</span>

                <h2 className="cta-title">
                    ¿LISTO PARA VENDER <br />MÁS PROPIEDADES?
                </h2>

                <p className="cta-desc">
                    Trabajamos con inmobiliarias que quieren resultados reales. Sin excusas. Sin humo.
                </p>

                <div className="cta-actions">
                    <a
                        href="https://wa.me/+5493816436944"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cta-primary"
                    >
                        <MessageCircle size={20} />
                        Hablemos Ahora
                    </a>
                    <a
                        href="/contacto"
                        className="btn-cta-outline"
                    >
                        Dejar Mensaje
                        <ArrowRight size={20} />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}