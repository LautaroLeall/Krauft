// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Manifesto.css";

export default function Manifesto() {
    return (
        <section className="manifesto-section" id="manifiesto">
            <div className="marquee-wrapper">

                <motion.div
                    className="marquee-content"

                    /* Movimiento en porcentaje (no px) */
                    animate={{ x: ["0%", "-50%"] }}

                    /* Loop continuo */
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    }}
                >

                    {/* Contenedor interno */}
                    <div className="marquee-inner">

                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="marquee-group">

                                {/* Repetimos textos dentro del grupo */}
                                {[...Array(4)].map((_, j) => (
                                    <div key={j} className="marquee-text">

                                        <span>ESTRUCTURA & CRECIMIENTO</span>
                                        <span className="mx-8 opacity-50">•</span>

                                        <span>SOLIDEZ & CONFIANZA</span>
                                        <span className="mx-8 opacity-50">•</span>

                                        <span>DINAMISMO & ORGANIZACIÓN</span>
                                        <span className="mx-8 opacity-50">•</span>

                                    </div>
                                ))}

                            </div>
                        ))}

                    </div>
                </motion.div>
            </div>

            <div className="manifesto-container">

                {/* BLOQUE IDENTIDAD */}
                <div className="identity-block">

                    <span className="identity-label">
                        Quiénes Somos
                    </span>

                    <motion.h3
                        className="identity-headline"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        SOMOS DOS JÓVENES CON GANAS DE{" "}
                        <span className="highlight">REVOLUCIONAR</span>{" "}
                        EL MARKETING INMOBILIARIO.
                    </motion.h3>

                    <motion.p
                        className="identity-text"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Somos personas serias y comprometidas, apasionadas por generar
                        resultados reales. Nuestra identidad visual transmite solidez,
                        reflejada en nuestro isotipo geométrico que simboliza estructura.
                    </motion.p>

                </div>
            </div>

        </section>
    );
}
